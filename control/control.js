let elemento = document.getElementById("code")
let text_element = document.getElementById("code").textContent

let codigo = 'const Persona = {\n\tName    : "Breyner Jhurlens",\n\tLastName: "Morales Penadillo",\n\tAge     : 21,\n\tCountry : "Perú",\n\tCity    : "Lima",\n\tsaludar : function(){\n\t\t\talert("Hola, soy "+this.Name);\n\t}\n}'




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function demo() {
    for (let i = 0;i<codigo.length;i++) {
        elemento.textContent+= codigo[i]+"▐";
        await sleep(30);
        elemento.textContent = elemento.textContent.substring(0, elemento.textContent.length - 1);
    }
    hljs.highlightAll();
}
demo();
function ShowBtn(){
    
    const BtnMenu = document.getElementById("links")
    if (BtnMenu.classList.contains("link_list")){
        
        BtnMenu.classList.remove("link_list")
        BtnMenu.classList.add("show")
    }else{
        BtnMenu.classList.remove("show")
        BtnMenu.classList.add("link_list")

    }

}
