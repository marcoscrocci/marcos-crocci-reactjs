export function getLanguage() {
    return localStorage.getItem('language') || 'en';
}

export function setLanguage(language) {
    localStorage.setItem('language', language);
    console.log('Language set to', language);
}

