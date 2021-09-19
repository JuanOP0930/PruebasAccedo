const blockRowTd = (button) =>{
    let classBlock = button.classList.contains("block");
    if(classBlock == false){    
        button.innerText = "x";
        let row = button.parentNode;
        let table = row.parentNode;
        if(button.classList.contains("c1")){
            for(i = 0; i < table.children.length; i++){
                let j = 0;
                table.children[i].children[j].classList.add("block");
            }
        }else if(button.classList.contains("c2")){
            for(i = 0; i < table.children.length; i++){
                let j = 1;
                table.children[i].children[j].classList.add("block");
            }
        }else if(button.classList.contains("c3")){
            for(i = 0; i < table.children.length; i++){
                let j = 2;
                table.children[i].children[j].classList.add("block");
            }
        }else if(button.classList.contains("c4")){
            for(i = 0; i < table.children.length; i++){
                let j = 3;
                table.children[i].children[j].classList.add("block");
            }
        }else if(button.classList.contains("c5")){
            for(i = 0; i < table.children.length; i++){
                let j = 4;
                table.children[i].children[j].classList.add("block");
            }
        }
        for(i = 0; i < row.children.length; i++){
            row.children[i].classList.add("block");
        }
        for(i=0; i<button.parentNode.parentNode.children.length; i++){
            let col = button.parentNode.parentNode.children[i];
        }
    }
}