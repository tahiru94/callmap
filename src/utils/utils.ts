export const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleString();
}

export const formatPhoneNumber = (phoneNumber: string) => {
    let cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        const internationalCode = (match[1] ? '+1 ' : '');
        return [internationalCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }

    return '';
}