const inputArea = document.getElementById("inputSection")

const outputArea = document.getElementById("outputSection")

const formatBtn = document.getElementById("format-button")

const minifyBtn = document.getElementById("minify-button")

formatBtn.addEventListener("click",function(){
    const jsonParse = JSON.parse(inputArea.value)
    const formatted = JSON.stringify(jsonParse, null, 4)
    outputArea.value = formatted

})

minifyBtn.addEventListener("click",function(){
    const jsonParse = JSON.parse(inputArea.value)
    const minified = JSON.stringify(jsonParse)
    outputArea.value = minified

})

copyBtn.addEventListener("click", function(){
    outputArea.select()
    outputArea.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(outputArea.value);
})