function play_drums(key){
    var sound = new Audio(`sounds/${key}.wav`);
    const div_to_select = document.getElementById(key);
    div_to_select.classList.add('button-pressed');
    sound.play();
    setTimeout(() => div_to_select.classList.remove('button-pressed'), 200);
}

function main(){
    window.addEventListener('keydown', (e) => {
        var valid_keys = ['d','k','o','p','s'];
        var key_pressed = e.key;
        if (valid_keys.includes(key_pressed)){
            play_drums(key_pressed);
        }
    }  )
}

main();