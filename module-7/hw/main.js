const keyboard = {
    
    createLayout: function() {
        
    const topRow = "qwertyuiop[]".split("");
    const middleRow = "asdfghjkl;'".split("");
    const bottomRow = "zxcvbnm,./".split("");
    
    const main = document.querySelector(".main");
    
    const layout = document.createElement("section");
    layout.classList.add("layout");
    main.appendChild(layout);
    
    const toprow = document.createElement("div");
    toprow.classList.add("layout__toprow");
    layout.appendChild(toprow);
        
    function rowAddKey(row, elem) {
        let i = 0;
        let p;
        while(i < row.length){
                p = document.createElement("p");
                p.textContent = row[i]; 
                elem.appendChild(p);
                i += 1;
            }
    }
        
    rowAddKey(topRow, toprow);    
        
    const middlerow = document.createElement("div");
    middlerow.classList.add("layout__middlerow");
    layout.appendChild(middlerow);
        
    rowAddKey(middleRow, middlerow);   
    
    const bottomrow = document.createElement("div");
    bottomrow.classList.add("layout__bottomrow");
    layout.appendChild(bottomrow);
        
    rowAddKey(bottomRow, bottomrow);
    
        return layout;
        
   }
};

keyboard.createLayout();
