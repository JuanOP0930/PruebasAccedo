window.onload = function(){
    const codeMorse = document.getElementById("inputMorse");
    const normalText = document.getElementById("inputText");
    const morse = {
        A: ["A", ".-"],
        B: ["B", "-..."],
        C: ["C", "-.-."],
        D: ["D", "-.."],
        E: ["E", "."],
        F: ["F", "..-."],
        G: ["G", "--."],
        H: ["H", "...."],
        I: ["I", ".."],
        J: ["J", ".---"],
        K: ["K", "-.-"],
        L: ["L", ".-.."],
        M: ["M", "--"],
        N: ["N", "-."],
        O: ["O", "---"],
        P: ["P", ".--."],
        Q: ["Q", "--.-"],
        R: ["R", ".-."],
        S: ["S", "..."],
        T: ["T", "-"],
        U: ["U", "..-"],
        V: ["V", "...-"],
        W: ["W", ".--"],
        X: ["X", "-..-"],
        Y: ["Y", "-.--"],
        Z: ["Z", "--.."],
        " ": [" ", " / "]
    }
    const abc = {
        ".-": ["A", ".-"],
        "-...": ["B", "-..."],
        "-.-.": ["C", "-.-."],
        "-..": ["D", "-.."],
        ".": ["E", "."],
        "..-.": ["F", "..-."],
        "--.": ["G", "--."],
        "....": ["H", "...."],
        "..": ["I", ".."],
        ".---": ["J", ".---"],
        "-.-": ["K", "-.-"],
        ".-..": ["L", ".-.."],
        "--": ["M", "--"],
        "-.": ["N", "-."],
        "---": ["O", "---"],
        ".--.": ["P", ".--."],
        "--.-": ["Q", "--.-"],
        ".-.": ["R", ".-."],
        "...": ["S", "..."],
        "-": ["T", "-"],
        "..-": ["U", "..-"],
        "...-": ["V", "...-"],
        ".--": ["W", ".--"],
        "-..-": ["X", "-..-"],
        "-.--": ["Y", "-.--"],
        "--..": ["Z", "--.."],
        "/": [" ", " / "]
    }

    const textToMorse = () =>{
        let valueText = normalText.value.toUpperCase();
        let codeString = ""; 
        for(i=0; i<valueText.length; i++){
            let letter = valueText[i];
            let code = morse[letter][1];
            codeString += code;
            codeMorse.value = codeString;
        } 
        if(valueText == ""){
            codeMorse.value = "";
        }
    }
    const morseToText = () =>{
        let valueMorse = codeMorse.value;
        let textString = ""; 
        for(i=0; i<valueMorse.length; i++){
            let code = valueMorse;
            let letter = abc[code][0];
            textString = letter;
            normalText.value = textString;
        } 
        if(valueMorse == ""){
            normalText.value = "";
        }
    }

    normalText.addEventListener("keyup", ()=>{
        textToMorse();
    });
    codeMorse.addEventListener("keyup", ()=>{
        morseToText();
    })
}