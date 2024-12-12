
const languages = {
    "Abkhaz": "ab",
    "Acehnese": "ace",
    "Acholi": "ach",
    "Afrikaans": "af",
    "Albanian": "sq",
    "Alur": "alz",
    "Amharic": "am",
    "Arabic": "ar",
    "Armenian": "hy",
    "Assamese": "as",
    "Awadhi": "awa",
    "Aymara": "ay",
    "Azerbaijani": "az",
    "Balinese": "ban",
    "Bambara": "bm",
    "Bashkir": "ba",
    "Basque": "eu",
    "Batak Karo": "btx",
    "Batak Simalungun": "bts",
    "Batak Toba": "bbc",
    "Belarusian": "be",
    "Bemba": "bem",
    "Bengali": "bn",
    "Betawi": "bew",
    "Bhojpuri": "bho",
    "Bikol": "bik",
    "Bosnian": "bs",
    "Breton": "br",
    "Bulgarian": "bg",
    "Buryat": "bua",
    "Cantonese": "yue",
    "Catalan": "ca",
    "Cebuano": "ceb",
    "Chichewa (Nyanja)": "ny",
    "Chinese (Simplified)": "zh-CN",
    "Chinese (Traditional)": "zh-TW",
    "Chuvash": "cv",
    "Corsican": "co",
    "Crimean Tatar": "crh",
    "Croatian": "hr",
    "Czech": "cs",
    "Danish": "da",
    "Dinka": "din",
    "Divehi": "dv",
    "Dogri": "doi",
    "Dombe": "dov",
    "Dutch": "nl",
    "Dzongkha": "dz",
    "English": "en",
    "Esperanto": "eo",
    "Estonian": "et",
    "Ewe": "ee",
    "Fijian": "fj",
    "Filipino (Tagalog)": "fil",
    "Finnish": "fi",
    "French": "fr",
    "French (French)": "fr-FR",
    "French (Canadian)": "fr-CA",
    "Frisian": "fy",
    "Fulfulde": "ff",
    "Ga": "gaa",
    "Galician": "gl",
    "Ganda (Luganda)": "lg",
    "Georgian": "ka",
    "German": "de",
    "Greek": "el",
    "Guarani": "gn",
    "Gujarati": "gu",
    "Haitian Creole": "ht",
    "Hakha Chin": "cnh",
    "Hausa": "ha",
    "Hawaiian": "haw",
    "Hebrew": "iw",
    "Hiligaynon": "hil",
    "Hindi": "hi",
    "Hmong": "hmn",
    "Hungarian": "hu",
    "Hunsrik": "hrx",
    "Icelandic": "is",
    "Igbo": "ig",
    "Iloko": "ilo",
    "Indonesian": "id",
    "Irish": "ga",
    "Italian": "it",
    "Japanese": "ja",
    "Javanese": "jw",
    "Kannada": "kn",
    "Kapampangan": "pam",
    "Kazakh": "kk",
    "Khmer": "km",
    "Kiga": "cgg",
    "Kinyarwanda": "rw",
    "Kituba": "ktu",
    "Konkani": "gom",
    "Korean": "ko",
    "Krio": "kri",
    "Kurdish (Kurmanji)": "ku",
    "Kurdish (Sorani)": "ckb",
    "Kyrgyz": "ky",
    "Lao": "lo",
    "Latgalian": "ltg",
    "Latin": "la",
    "Latvian": "lv",
    "Ligurian": "lij",
    "Limburgan": "li",
    "Lingala": "ln",
    "Lithuanian": "lt",
    "Lombard": "lmo",
    "Luo": "luo",
    "Luxembourgish": "lb",
    "Macedonian": "mk",
    "Maithili": "mai",
    "Makassar": "mak",
    "Malagasy": "mg",
    "Malay": "ms",
    "Malay (Jawi)": "ms-Arab",
    "Malayalam": "ml",
    "Maltese": "mt",
    "Maori": "mi",
    "Marathi": "mr",
    "Meadow Mari": "chm",
    "Meiteilon (Manipuri)": "mni-Mtei",
    "Minang": "min",
    "Mizo": "lus",
    "Mongolian": "mn",
    "Myanmar (Burmese)": "my",
    "Ndebele (South)": "nr",
    "Nepalbhasa (Newari)": "new",
    "Nepali": "ne",
    "Northern Sotho (Sepedi)": "nso",
    "Norwegian": "no",
    "Nuer": "nus",
    "Occitan": "oc",
    "Odia (Oriya)": "or",
    "Oromo": "om",
    "Pangasinan": "pag",
    "Papiamento": "pap",
    "Pashto": "ps",
    "Persian": "fa",
    "Polish": "pl",
    "Portuguese": "pt",
    "Portuguese (Portugal)": "pt-PT",
    "Portuguese (Brazil)": "pt-BR",
    "Punjabi": "pa",
    "Punjabi (Shahmukhi)": "pa-Arab",
    "Quechua": "qu",
    "Romani": "rom",
    "Romanian": "ro",
    "Rundi": "rn",
    "Russian": "ru",
    "Samoan": "sm",
    "Sango": "sg",
    "Sanskrit": "sa",
    "Scots Gaelic": "gd",
    "Serbian": "sr",
    "Sesotho": "st",
    "Seychellois Creole": "crs",
    "Shan": "shn",
    "Shona": "sn",
    "Sicilian": "scn",
    "Silesian": "szl",
    "Sindhi": "sd",
    "Sinhala (Sinhalese)": "si",
    "Slovak": "sk",
    "Slovenian": "sl",
    "Somali": "so",
    "Spanish": "es",
    "Sundanese": "su",
    "Swahili": "sw",
    "Swati": "ss",
    "Swedish": "sv",
    "Tajik": "tg",
    "Tamil": "ta",
    "Tatar": "tt",
    "Telugu": "te",
    "Tetum": "tet",
    "Thai": "th",
    "Tigrinya": "ti",
    "Tsonga": "ts",
    "Tswana": "tn",
    "Turkish": "tr",
    "Turkmen": "tk",
    "Twi (Akan)": "ak",
    "Ukrainian": "uk",
    "Urdu": "ur",
    "Uyghur": "ug",
    "Uzbek": "uz",
    "Vietnamese": "vi",
    "Welsh": "cy",
    "Xhosa": "xh",
    "Yiddish": "yi",
    "Yoruba": "yo",
    "Yucatec Maya": "yua",
    "Zulu": "zu"
}

const formLanguages = () => {
    const language_selects = document.getElementsByClassName("language");

    for (let select of language_selects) {
        if (select.id === "input-language") { // only input language got auto
            // add in auto
            let option = document.createElement("option");
            option.setAttribute("value","auto");
            option.innerText = "Auto";
            select.appendChild(option);
        }

        for (let [language,code] of Object.entries(languages)) {
            let option = document.createElement("option");
            option.setAttribute("value",code);
            option.innerText = language;
            if (select.id === "output-language" && code==="zh-CN") {
                option.setAttribute("selected","true")
            }
            select.appendChild(option);
        }
        
    }
}

const addLanguage = () => {
    let language_div = document.createElement("div");
    let language_select = document.createElement("select");

    for (let [language,code] of Object.entries(languages)) {
        let option = document.createElement("option");
        option.setAttribute("value",code);
        option.innerText = language;
        language_select.appendChild(option);
    }
    

    let language_remove = document.createElement("button");
    language_remove.classList.add("delete-button");
    language_remove.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
    </svg>`;

    language_remove.addEventListener("click",()=>{
        language_div.remove();
    })
    language_div.appendChild(language_select);
    language_div.appendChild(language_remove);
    language_div.classList.add("extra-language-div");
    document.getElementById("extra-languages").appendChild(language_div);
}


let manual = document.getElementById("manual-select-language");
let auto = document.getElementById("auto-select-language");
const selectLanguageMode = (current_id)=>{
    // console.log(manual.checked);
    // console.log(auto.checked);
    // check the current_id
    if (current_id === "manual-select-language") {
        if (manual.checked) {
            auto.checked = false;
        }
        else {
            auto.checked = true;
        }
    }

    if (current_id === "auto-select-language") {
        if (auto.checked) {
            manual.checked = false;
        }
        else {
            manual.checked = true;
        }
    }
}


let input_text = document.getElementById("input-text");
let output_text = document.getElementById("output-text");
let source_language = document.getElementById("input-language");
let target_language = document.getElementById("output-language");
let extra_result = document.getElementById("extra-result");
let extra_languages = document.getElementById("extra-languages");
const translate = async () => {
    let url = ""
    const num_of_lang = document.getElementById("num-of-lang").value;
    extra_result.innerText = ""; // clear previous result

    let sl = source_language.value;
    let tl = ""
    let q = input_text.value;

    if (auto.checked) { //auto translation

        const names = Object.keys(languages);

        // loop the in between language
        for (let i = 0; i < num_of_lang; i++) {
            const random_idx = Math.floor(Math.random() * names.length);
            let random_name = names[random_idx];
            const random_code = languages[random_name];
            
            tl = random_code;
            
            let result_text="";
            url=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${q}`;
            // console.log(url);

            // GET translation result
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // GET translation result
                const data = await response.json();
                // result_text = data[0][0][0];
                //console.log(data[0])
                for (let i=0; i<data[0].length; i++) {
                    result_text += data[0][i][0];
                }
                
                if (sl==="auto") {
                    extra_result.innerText += `${sl} (${data[2]}) -> ${random_name} (${tl}): ${result_text}\r\n`; 
                }
                else {
                    extra_result.innerText += `${sl} -> ${random_name} (${tl}): ${result_text}\r\n`; 
                }
    
                // Refresh the query text and source language for the next iteration
                sl = tl;
                q = result_text;
    
            } catch (err) {
                extra_result.innerText = `Request Error: ${err.message}`;
            }

        }

        // last iteration to tl
        let language_text = target_language.options[target_language.selectedIndex].text;
        tl = target_language.value;
        url=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${q}`;
        // GET translation result
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // GET translation result
            const data = await response.json();
            result_text = data[0][0][0]; 
            //console.log(data[0])
            for (let i=0; i<data[0].length; i++) {
                result_text += data[0][i][0];
            }
            
            if (sl==="auto") {
                extra_result.innerText += `${sl} (${data[2]}) -> ${language_text} (${tl}): ${result_text}\r\n`; 
            }
            else {
                extra_result.innerText += `${sl} -> ${language_text} (${tl}): ${result_text}\r\n`; 
            }
            output_text.innerText = result_text;
        } catch (err) {
            extra_result.innerText = `Request Error: ${err.message}`;
        }
    }
    else if (manual.checked){ //manual translation
        let result_text="";
        let language_text = ""

        // loop the children of extra-languages
        for (let element of extra_languages.children) {
            let elem = element.getElementsByTagName("select")[0];
            language_text = elem.options[elem.selectedIndex].text;
            let language_code = elem.value;
            tl = language_code;

            url=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${q}`;
            // console.log(url);

            // GET translation result
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // GET translation result
                const data = await response.json();
                result_text = data[0][0][0]; 
                //console.log(data[0])
                for (let i=0; i<data[0].length; i++) {
                    result_text += data[0][i][0];
                }
                
                if (sl==="auto") {
                    extra_result.innerText += `${sl} (${data[2]}) -> ${language_text} (${tl}): ${result_text}\r\n`; 
                }
                else {
                    extra_result.innerText += `${sl} -> ${language_text} (${tl}): ${result_text}\r\n`; 
                }
                // Refresh the query text and source language for the next iteration
                sl = tl;
                q = result_text;
    
            } catch (err) {
                extra_result.innerText = `Request Error: ${err.message}`;
            }
        }

        // last iteration to tl
        language_text = target_language.options[target_language.selectedIndex].text;
        tl = target_language.value;
        url=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${q}`;
        // GET translation result
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // GET translation result
            const data = await response.json();
            result_text = data[0][0][0]; 
            //console.log(data[0])
            for (let i=0; i<data[0].length; i++) {
                result_text += data[0][i][0];
            }
        
            if (sl==="auto") {
                extra_result.innerText += `${sl} (${data[2]}) -> ${language_text} (${tl}): ${result_text}\r\n`; 
            }
            else {
                extra_result.innerText += `${sl} -> ${language_text} (${tl}): ${result_text}\r\n`; 
            }
            output_text.innerText = result_text;
        } catch (err) {
            extra_result.innerText = `Request Error: ${err.message}`;
        }
    }
}

// Connect button to event listener
document.getElementById("add-language").addEventListener("click",addLanguage);
document.getElementById("manual-select-language").addEventListener("click",()=>{
    selectLanguageMode("manual-select-language");
});
document.getElementById("auto-select-language").addEventListener("click",()=>{
    selectLanguageMode("auto-select-language");
});
document.getElementById("translate").addEventListener("click",translate);

formLanguages();
selectLanguageMode();
