import test from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_SCHOOL_SETTINGS, SETTINGS_STORAGE_KEY } from '../data/defaultSettings';
import {
  clearSettingsInStorage,
  getRoleForSection,
  loadSettingsFromStorage,
  pageToHash,
  parseHashToPage,
  sanitizeSchoolSettings,
  saveSettingsToStorage,
  validateSchoolSettings,
} from './settingsStorage';

function createMemoryStorage() {
  const map = new Map<string, string>();
  return {
    getItem: (key: string) => map.get(key) ?? null,
    setItem: (key: string, val: string) => {
      map.set(key, val);
    },
    removeItem: (key: string) => {
      map.delete(key);
    },
  };
}

test('DEFAULT_SCHOOL_SETTINGS is completely empty on first run with no personal data', () => {
  assert.equal(DEFAULT_SCHOOL_SETTINGS.schoolName, '');
  assert.equal(DEFAULT_SCHOOL_SETTINGS.educationDepartment, '');
  assert.equal(DEFAULT_SCHOOL_SETTINGS.principalName, '');
  assert.equal(DEFAULT_SCHOOL_SETTINGS.userName, '');
  assert.equal(DEFAULT_SCHOOL_SETTINGS.academicYear, '');
  assert.equal(DEFAULT_SCHOOL_SETTINGS.roles.professionalDevelopment, '');
  assert.equal(DEFAULT_SCHOOL_SETTINGS.roles.gifted, '');
  assert.equal(DEFAULT_SCHOOL_SETTINGS.roles.teacher, '');
});

test('validateSchoolSettings allows saving empty or partially filled settings', () => {
  const emptyCheck = validateSchoolSettings(DEFAULT_SCHOOL_SETTINGS);
  assert.equal(emptyCheck.valid, true);
  assert.deepEqual(emptyCheck.errors, {});

  const partialSettings = {
    ...DEFAULT_SCHOOL_SETTINGS,
    schoolName: 'مدرسة تجريبية',
    roles: {
      ...DEFAULT_SCHOOL_SETTINGS.roles,
      teacher: 'معلم مادة',
    },
  };
  const partialCheck = validateSchoolSettings(partialSettings);
  assert.equal(partialCheck.valid, true);
  assert.deepEqual(partialCheck.errors, {});
});

test('saveSettingsToStorage, loadSettingsFromStorage, and clearSettingsInStorage preserve local data and reset to empty', () => {
  const userAStorage = createMemoryStorage();
  const userBStorage = createMemoryStorage();

  // Initial load returns empty defaults
  const initialA = loadSettingsFromStorage(userAStorage);
  assert.deepEqual(initialA, DEFAULT_SCHOOL_SETTINGS);

  // User A saves partial settings
  const updatedA = {
    ...DEFAULT_SCHOOL_SETTINGS,
    schoolName: 'مدرسة المستخدم الأول',
    academicYear: '1448-1449',
    roles: {
      ...DEFAULT_SCHOOL_SETTINGS.roles,
      teacher: 'معلم العلوم',
    },
  };
  const saved = saveSettingsToStorage(updatedA, userAStorage);
  assert.equal(saved, true);
  assert.ok(userAStorage.getItem(SETTINGS_STORAGE_KEY));

  // User A loads their saved settings (including empty fields)
  const loadedA = loadSettingsFromStorage(userAStorage);
  assert.equal(loadedA.schoolName, 'مدرسة المستخدم الأول');
  assert.equal(loadedA.academicYear, '1448-1449');
  assert.equal(loadedA.roles.teacher, 'معلم العلوم');
  assert.equal(loadedA.roles.professionalDevelopment, '');

  // User B on another browser/device still gets completely empty settings
  const loadedB = loadSettingsFromStorage(userBStorage);
  assert.deepEqual(loadedB, DEFAULT_SCHOOL_SETTINGS);

  // Resetting User A restores empty defaults
  const afterClearA = clearSettingsInStorage(userAStorage);
  assert.deepEqual(afterClearA, DEFAULT_SCHOOL_SETTINGS);
  assert.equal(userAStorage.getItem(SETTINGS_STORAGE_KEY), null);
});

test('sanitizeSchoolSettings preserves existing saved local data and defaults missing fields to empty string', () => {
  const recovered = sanitizeSchoolSettings({
    schoolName: 'مدرسة محفوظة مسبقاً',
    roles: { gifted: 'منسق' },
  });
  assert.equal(recovered.schoolName, 'مدرسة محفوظة مسبقاً');
  assert.equal(recovered.roles.gifted, 'منسق');
  assert.equal(recovered.roles.teacher, '');
  assert.equal(recovered.userName, '');
});

test('getRoleForSection returns the distinct role for each section', () => {
  const customSettings = {
    ...DEFAULT_SCHOOL_SETTINGS,
    roles: {
      professionalDevelopment: 'صفة 1',
      gifted: 'صفة 2',
      teacher: 'صفة 3',
    },
  };
  assert.equal(getRoleForSection(customSettings, 'professional-development'), 'صفة 1');
  assert.equal(getRoleForSection(customSettings, 'gifted'), 'صفة 2');
  assert.equal(getRoleForSection(customSettings, 'teacher'), 'صفة 3');
});

test('hash routing helpers parse and format page IDs for GitHub Pages compatibility', () => {
  assert.equal(parseHashToPage(''), 'home');
  assert.equal(parseHashToPage('#/'), 'home');
  assert.equal(parseHashToPage('#/professional-development'), 'professional-development');
  assert.equal(parseHashToPage('#/gifted'), 'gifted');
  assert.equal(parseHashToPage('#/teacher'), 'teacher');
  assert.equal(parseHashToPage('#/settings'), 'settings');
  assert.equal(parseHashToPage('#/unknown'), 'home');

  assert.equal(pageToHash('home'), '#/');
  assert.equal(pageToHash('settings'), '#/settings');
});
