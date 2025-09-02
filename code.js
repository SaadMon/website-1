const menuicon = document.getElementsByTagName("i")[0];
        const menu = document.getElementsByTagName("ul")[0];
        menuicon.addEventListener("click", function(){
            if(menu.style.right == "-100%")
                menu.style.right = "0%";
            else
                menu.style.right = "-100%"
        })