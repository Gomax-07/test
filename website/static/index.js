function deletePitch(pitchId) {
    fetch('/delete-pitch', {
        methods = 'POST',
        body: JSON.stringify({
            pitchId: pitchId
        }),
    }).then((_res) => {
        window.location.href = "/";
    });
}