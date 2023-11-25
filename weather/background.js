export function background(time) {
    const background = document.querySelector('body');
    const timeColorMap = {
        'earlyMorning': { start: 5, end: 7, color: '#87CEEB' },
        'morning': { start: 7, end: 11, color: '#FFD700' },
        'afternoon': { start: 11, end: 16, color: '#FF6347' },
        'evening': { start: 16, end: 19, color: '#FFA07A' },
        'night': { start: 19, end: 24, color: '#2F4F4F' },
        'lateNight': { start: 0, end: 5, color: '#2F4F4F' }
    };

    function getBackgroundColor(time) {
        for (const key in timeColorMap) {
            const start = timeColorMap[key].start;
            const end = timeColorMap[key].end;
            const color = timeColorMap[key].color;
            if ((time >= start && time < end) || (start > end && (time >= start || time < end))) {
                return color;
            }
        }
    }

    background.style.backgroundColor = getBackgroundColor(time);
}