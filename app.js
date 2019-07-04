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