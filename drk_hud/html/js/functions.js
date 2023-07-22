const startHudEvents = () => window.addEventListener('message', ({ data }) => data.type === 'updateHud' && startUpdatingHud(data));
const startUpdatingHud = ({ status }) => {
    const { health, shield, hunger, thirst, voice, talking, radio } = status;
    const formattedStatus = [
        { name: 'health', value: health },
        { name: 'shield', value: shield },
        { name: 'hunger', value: hunger },
        { name: 'thirst', value: thirst },
        { name: 'voice', value: voice }
    ];
    health < 100 ? $('.health').show(250) : $('.health').hide(250);
    shield > 0  ? $('.shield').show(250) : $('.shield').hide(250);
    hunger < 50 ? $('.hunger').show(250) : $('.hunger').hide(250);
    thirst < 50 ? $('.thirst').show(250) : $('.thirst').hide(250);
    talking ? $('.voice .hud-icon').css('color', 'white') : $('.voice .hud-icon').css('color', 'grey');
    if (radio) {
        $('#voice').hide();
        $('#radio').show();
    } else {
        $('#voice').show();
        $('#radio').hide();
    }
    formattedStatus.forEach(({ name, value }) => $(`.${name}-bar`).css({ 'height': `${value}%` }));
}