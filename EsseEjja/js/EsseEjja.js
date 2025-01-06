// Diccionario de traducción (Ejemplo, puedes reemplazarlo con tus datos reales)
const diccionario ={
    "surubí": "wipisi",
    "perro" : "iñawewa",
    "bato" : "bokao",
    "caimán" : "sha,ejjame",
    "sol" : "esheki",
    "barranco" : "epawa",
    "luna" : "ba,i",
    "estrella" : "meja",
    "arroyo" : "eta,a",
    "motaña" : "eiyo",
    "rodilla" : "ekwi,oshajja",
    "cabeza" : "esapa",
    "mano" : "emé",
    "ombligo" : "soo",
    "correr" : "kwajikwajiani",
    "saltar" : "towaani",
    "comer" : "ijjiakani",
    "dormir" : "kawiani",
    "amanecer" : "jjapojjakiani",
    "quebrarse" : "jjakwiasajakiani",
    "ahogarse" : "jjashiyokiani",
    "peinarse" : "jjajabekiani",
    "distante" : "kiawesha",
    "borracho" : "ewoo",
    "salado" : "kiasese",
    "verde" : "etawa",
    "cual" : "ache",
    "donde" : "achenei",
    "como" : "achajja",
    "que" : "aé",
    "yo" : "eya",
    "dormí" : "kawinaje",
    "yo dormiré" : "eya kawije",
    "yo dormí" : "eya kawinaje",
    "estoy durmiendo" : "eya kawiani",
    "bueno" : "kiapame",
    "cercano" : "kiachipi",
    "oreja" : "eshaja",
    "embuelto" : "edono",
    "que vaya" : "kapokiawa",
    "que coma" : "ka,ijjakawa",
    "no salgas" : "a,apokiji",
    "ya no salgas" : "a,akwayake,iojji",
    "vas a ir" : "a, a mi",
    "cocechar arroz" : "pokije anoso sejja",
    "ya no salgas" : "A,akwajayaki,iojji",
    "casi pero no" : "a,ajjakani",
    "bostezar" : "a,akwani",
    "ese" : "joya",
    "niño" : "ebakwa",
    "esta" : "a,i",
    "mi hermana esta vieja" : "ekwe a,i ponatiinaje",
    "qué" : "a,ia",
    "quién" : "a,ia",
    "no" : "a,io",
    "yo no voy a ir" : "a,io epokiji pajjiama iña",
    "espere" : "a,iosawa",
    "espere un momento enseguida voy" : "a,iosawa jjeyawa iña pokije",
    "doblar hoja" : "aatetokani",
    "manco" : "aawojja",
    "tuco" : "aawojja",
    "nacio" : "kwayanaje",
    "bebe" : "ebakwa",
    "cargar" : "abokani",
    "el carga platano" : "owaya ejjawi abokani",
    "como" : "achaja",
    "como estas" : "achajja,ami",
    "como estan ustedes" : "achajja,amikiani",
    "como amaneciste" : "achajja,amikianajjapokinaje",
    "como sera" : "jjapokinaje",
    "será" : "jjapokinaje",
    "como sera dice si yo lo dejo" : "oya shai achajjashaipome pokinaje",
    "a donde" : "achakwa",
    "donde" : "achakwa",
    "el huaso a donde se habra ido" : "dokwei achakwashai",
    "cual" : "ache",
    "quien" : "ache",
    "ancho" : "ao",
    "largo" : "ao",
    "cual cosa voy a alzar" : "ache jaa jjesheje",
    "que largura es tu chaco" : "ache ao mikieya ke jaa",
    "dias" : "kawiwiso",
    "cuantos dias" : "ache kawiwiso",
    "cuantos dias vas a ir a cazar" : "ache kawiwiso mi pokije kwaa",
    "donde" : "achejo",
    "achejje" : "por donde",
    "tu donde vas a vivir" : "miya achejo ba,je",
    "por donde queda el camino" : "achejje ejiojji jaa",
    "cuanto de ancho" : "achekemo",
    "cuanto cuesta" : "achesosewiso",
    "cuanto compraste la ropa" : "achesosewiso miyaya jjeshenaje daki",
    "cuando" : "acheshono",
    "cuanto" : "achewiso",
    "estornudar" : "achiani",
    "yo estornudo mucho" : "kiawiso eya achiani",
    "y hay comida para comer" : "aé che boby e,ijjiajji",
    "que haces" : "aekwani",
    "que estas haciendo" : "aekwani",
    "tu que haces en la casa" : "aekwami miya ekijo",
    "donde estas" : "aekwee",
    "donde esta su gato de mi tio" : "aekwe ekwe totoja michi",
    "gato" : "michi",
    "pregunta" : "aekwe",
    "preguntar" : "aekwe",
    "donde esta mi suegro": "aekwe baba",
    "necesito" : "aemá",
    "vivir en una casa pobre" : "eki chiijo se ba,e",
    "ya lo hallaste" : "aeme",
    "ya lo hallaste su trapo" : "aeme tapo a,a ba,ionaje",
    "leer" : "aje",
    "yo boy a leer libros" : "eyaya papeni aje",
    "alacran" : "ají",
    "no hacerse picar con el alacran" : "aji a,a jjakekwameekijji",
    "de quien" : "ajia",
    "de quien es esta canoa" : "ajia jikio bishé",
    "a que" : "ajio",
    "con que proposito" : "ajio",
    "no cumplir" : "ajjima",
    "el no ha terminado de limpiar el chaco" : "ojaya ke chakojeyojjima",
    "errar con arma" : "ajjokanaje",
    "poner en marcha" : "akanaje",
    "los niños leyeron sus libros" : "esho,ikiaa akanaje papeni",
    "producir" : "akani",
    "hacer un bebe" : "ekwanisho akani",
    "manifestar con palabras" : "akani",
    "interpretar" : "akani",
    "mi hermana lee sus libros" : "ekwe jjo,iya papeni akani",
    "suposicion" : "akiana",
    "en su casa de mi hermano hay cosas" : "chawaja ekijo ",
    "banda del rio" : "ojje",
    "a la punta" : "ewiyasijje",
    "a pie" : "ojjá",
    "a todos" : "ojjaña meshiyasijje",
    "todo el mundo" : "meshiyasijje",
    "a" : "va",
    "al" : "yasijje",
    "a la" : "wasijje",
    "a ver" : "ba,ajjá",
    "abajo" : "makwawasijje",
    "veremos" : "bá,ajja",
    "hacia el suelo" : "meshiyasijje",
    "abandonado" : "ejiana,io",
    "abandonar" : "jiñaka,iani",
    "abanico" : "epeji kwakipeji",
    "abeja chuchuwuasa" : "eweshawaniji",
    "abeja erereú" : "wano wano",
    "abeja grande" : "biñama",
    "abeja negra" : "winijjichewe",
    "abierto" : "eka,apejo",
    "ablandamiento" : "tonatonani",
    "ablandar" : "nomanomani",
    "ablandar con agua" : "shapeshikani",
    "abortar" : "jjamo,ikiani",
    "aborto" : "emo,i",
    "abrazar" : "iñamosokani",
    "abrir los ojos" : "jjabapojjakiani",
    "abrir" : "kekwashe,akani",
    "abrir la puerta" : "sheakani ka,apejokani",
    "absorber" : "jjekibibikani",
    "abuela" : "ano",
    "abuelo" : "baba",
    "acabado" : "owekwanaje",
    "acabarse" : "owekwani",
    "terminarse" : "owekwani",
    "acarrear" : "jiakani",
    "accidente" : "oke,iani",
    "aceite" : "eséi",
    "acercarse" : "jjachipiakiani",
    "achacar" : "kwasakani",
    "achachairu" : "bojiajjo",
    "aclarando" : "jjaja,akiani",
    "aclarar" : "tawani",
    "acomodar" : "iyábamekani wanabamekani",
    "acomodarse" : "jja,akiani",
    "acompañar a bañarse" : "besameekani",
    "acompañar" : "okwenakani",
    "aconsejar" : "niñeshe,akani",
    "acordeon" : "ejjekisejjeejji",
    "acostumbrarse al frio" : "jjawé ka,akiani",
    "acusar" : "pia nisho akani jjakwasakiani",
    "adelante" : "ewijje",
    "adentro" : "edojjowasijje",
    "adinerado" : "kiabejjowiso",
    "a donde" : "achakwa achejo",
    "adoptado" : "etume",
    "adormecimiento" : "shajani",
    "adueñarse" : "majjokani",
    "adulterio" : "piakojjojji",
    "adulto" : "etii",
    "afilar" : "ishokani",
    "aflojar" : "jiajjajakani",
    "aflojarse" : "jjajjajakiani",
    "afuera" : "esekwe",
    "agachar" : "wi,okekiani",
    "agarrar los dientes" : "ijjaikashokani",
    "agarrar fuerte" : "iñaka,akani",
    "agitar" : "jiadejjokani",
    "agonizar" : "manopokiani",
    "agua clara" : "enatawa",
    "agua hervida" : "ena ekwakwa",
    "agua" : "ena",
    "aguila arpia" : "kieewaí",
    "aguila de ojos rojos" : "wipakojjawo",
    "aguila" : "wipa",
    "aguila de caza" : "enawipa",
    "agujereado" : "ekekwawejja",
    "agujerear" : "kekwawejja",
    "ahí" : "majoya",
    "ahogarse" : "jjashiyokiani",
    "ahora mismo" : "jjeyanei",
    "ahorcar" : "nayishibikani",
    "ahorcar a alguien colgado" : "jjekibisikani",
    "ahorcarse" : " jjajjekisibikiani",
    "ahorita mismo vaya" : "jjeyawanei pokikwe",
    "ahorita" : "jjeyawanei",
    "aire" : "beni",
    "ajipa" : "tana",
    "ajo ajo" : "yopa",
    "ajustar" : "jiaka'akani",
    "ajustarse" : "jjayika'akiani",
    "al lado que llega el sur" : "eeno kweyanimijijje",
    "al lado, junto a algo" : "emijijje",
    "al momento" : "nanajia",
    "al revés" : "ejjotojje",
    "alabar" : "biwiákani",
    "alacrán" : "baakwí",
    "alcohol" : "ekawishi",
    "alegrar" : "kiabiwipopokiani",
    "alegre" : " kiabiwi",
    "alergia" : "poshosho",
    "aleta de pescado" : "eshasha",
    "alga" : "wajiñe",
    "algodón" : "wapeje",
    "algunos" : "bekakwana",
    "alimento cocido" : "bobi ekwakwa",
    "alimento" : "bobi",
    "allá" : "jokwama",
    "alma" : "edojjoshawa",
    "almendrillo" : "mawi",
    "almendro " : "shivijjalja",
    "almidón" : "ejjind",
    "almohada" : "ewojjajaajji",
    "almohadilla" : "pisana kwijji",
    "alumbrar" : "dedokani",
    "alzadora" : "ebakwa'añajji",
    "niñera" : "ebakwa'añajji",
    "alzar" : "jjekisowakani",
    "alzar bebé" : "añakani",
    "amanecer" : "jjapojjakiani",
    "amansar" : "jjabawenekiani",
    "amar" : "kiajid",
    "amargo" : "kiapase",
    "amarillo" : "jawa",
    "amarrado" : "ejeyo",
    "amarrar el cuello" : "naajeyokani",
    "amarrar fuerte" : "jeyonasikani",
    "amarrar fuerte una bolsa" : "yinasikani",
    "amarrar junto" : "ojeeyika'akani",
    "amarrar" : "jeyokani",
    "amarrar la cabeza" : "sapa yika'akani",
    "amasar" : "iñawawokani",
    "ampollarse" : "jjamepojokiani",
    "anaconda" : "so'o",
    "ancho" : "ponepone",
    "anchura" : "mijikemo",
    "anciana, vieja" : "awicha",
    "viejo" : "edejjatii",
    "anciano" : "etiinojinoji",
    "anda de noche" : "mekajjepojji",
    "andar atrás de uno" : "ekijje neinei kwani",
    "andar a pie dentro del agua" : "pekokani",
    "anémico" : "kiamano",
    "anesteciado" : "ekekwamoo",
    "anestesiar" : "moomeekani",
    "rana" : "mejjati",
    "ranota" : "miai",
    "angosto" : "kiakabo",
    "anguila " : "wio'ai",
    "anillo" : "eméwawo",
    "animal domesticado" : "ewone",
    "animal" : "ijjiakajji",
    "anochecer" : "siniani esheki okekiani",
    "anta" : "shawe",
    "antes de ayer" : "pia mekajje",
    "antes" : "iawajo",
    "ambaibo " : "kaawojje",
    "antepasados" : "kaaojje",
    "antiguos" : "etiikiana",
    "ambos lados" : "omiji pía ai",
    "amenazar" : "kwiasa'akani",
    "amigo" : "epeejji",
    "amigo falso" : "epeejji nisho",
    "amontonar" : "iyachichakani",
    "ampollar" : "tooowani",
    "ampolla" : "tooo",
    "anzuelo" : "esewe",
    "añadir" : "kekwa'apakaní",
    "aumentar" : "apakani",
    "año" : "dakishé",
    "apaciguar el enojo" : "tanakwakani",
    "apagar con agua" : " enaa chikani",
    "apagar" : "chimokani",
    "apagar lamparina" : "wojachimoka'iani",
    "apagar fuego" : "chikani kijjoani",
    "apartar" : "jiashiñakani iyashiñakani",
    "separar" : "wanatepekani",
    "apegar" : "jjakwiajipikiani",
    "tomar afecto" : "jjakwiajipikiani",
    "apetito" : "kianabasese",
    "deseo" : "kianabasese",
    "apisonar" : "kishika'akani",
    "aplanar" : "kishipe'ekani",
    "pisando" : "kishipe'ekani",
    "aplanar con pala" : "kekwabamekani",
    "aplanar la tierra" : "kwiábejekani",
    "aplaudir" : "mekwiakeyakani",
    "aprender" : "Jjabawejjakiani jjasamenekiani",
    "apretar" : "iñawowikani",
    "apretar con pita" : "jjekinaikani",
    "aquel" : "jomá",
    "aquí" : "jikiakwa jikiojo",
    "araña del río" : "enabasha",
    "árbol bibosi" : "etona",
    "árbol caricari" : "sake",
    "árbol de siringa" : "yoma",
    "árbol seco" : "akwi enojinoji",
    "árbol" : "palo akwi",
    "arbusto" : "tatamoo",
    "arco iris" : "eshijje",
    "arco " : "ekowijji",
    "arder " : "jijiani",
    "ardilla" : "chipo",
    "arisco" : "kiakojjapi",
    "arma de fuego" : "ekowijji",
    "arquero" : "penota iñajjekijji",
    "arrancar" : "jjekichiyokani",
    "arrastrar" : "bishé jjekiiyejakani",
    "arrear ganado" : "kwiawoojiakani",
    "arrempentirse" : "pia jjashawabakime po'iani",
    "arriba" : "eyawasijje eyajo",
    "arribar" : "sowakiani",
    "arroyo" : "eta'a",
    "arroz" : "anoso",
    "arrozal" : "anosoiye",
    "arrugada " : "kiashojja",
    "carnada" : "chapa",
    "asado" : "noé edawa eshi",
    "asado al horno" : "ewoo",
    "asaí " : "yisajjajja",
    "asar" : "dawakani",
    "asear" : "kwikani",
    "ascender" : "jaasowakiani",
    "así es bueno" : " jamaya kiapame",
    "así hubiera sido" : " jamaya pokiae",
    "así lo hace" : "jamaya akani",
    "así mirá" : "jamaba'a",
    "así que sea" : "jamaya kakwawa",
    "así" : "jamaya jama",
    "asiento" : "e'anijji e'ani'okejji",
    "áspero" : "kiasha'a",
    "asustarse" : "jjajjasoakiani",
    "atado los tobillos" : "ekibojeyo",
    "atardecer" : "jjasinekwakia",
    "anochecer" : "sinepokiani",
    "atizar para prender" : "dawawejjekani",
    "atizar" : "koshokani",
    "atorarse" : "sijjani",
    "atractivo" : "kiakojjabame",
    "atrapar con a red o trampa" : "bichameekani",
    "atrás o por detrás" : "ejakajjajje",
    "atrasar" : "shonoshonomeekani",
    "atravesado" : "ejiasewijaa",
    "aullido" : "jjojjokwani",
    "auto" : "meshijjepojji",
    "camión" : "meshijjepojji",
    "auxilio" : "įуето",
    "socorro" : "įуето",
    "ave cardenal" : "ena'ena",
    "ave carpintero" : "ja'ana",
    "cuyabo" : "pojja",
    "ave de pecho amarillo y alas cafés" : "setejja",
    "ave sumurucucú" : "bojjojjó",
    "ave tapacaré" : "ami'ewe",
    "ave" : "kwichojji",
    "avergonzarse" : "bichoani",
    "averiguar" : "ba'ajjakani",
    "aves burgo" : "ichanowi",
    "momota" : "ichanowi",
    "avión" : "eyajjepojji",
    "avisado" : "ewowi",
    "avisar" : "wowikani",
    "avisar de paso" : "wowinanakani",
    "bagre" : "akwishajji",
    "bagre de arroyo" : "nabatewe",
    "bailador " : "kiakajjajja",
    "bailar" : "majamajani",
    "bailarín" : "kiaso'o",
    "bajando por el río" : "yeka'ïani",
    "bajando desde encima" : "ye'okiakani",
    "bajar el nivel de agua del río" : "wosa'iáni",
    "bajar" : "jaa'okiani",
    "descender" : "jaa'okiani",
    "bajar algo o a alguien" : "wana'okiakani",
    "bajar algo, asentar" : "iya'okiakani",
    "bajarse" : "neki'okekinaje",
    "bajío" : "joyawa",
    "balanza romana" : "e'ipiajji",
    "balón" : "penota",
    "axila" : "enakwishi",
    "sobaco" : "enakwishi ayahuasca",
    "ayer " : "omamekajje",
    "anteayer" : "jomapojjajo",
    "ayudar a vivir" : "eba'emeesawajji ba'emeesawakani",
    "ayudante" : "echakosawajji",
    "ayudar a vestirse" : "daki woshomeekani",
    "ayudar" : "asawakani",
    "ayunar" : "bobi ijjia pojjimá ani",
    "azotar" : "kwiasejjájiakani",
    "azúcar" : "ebikiajji",
    "balsa " : "iñajapa",
    "bambú" : "sojje",
    "banca" : "e'anijji",
    "asiento" : "e'ani'okejji",
    "bañar" : "besani",
    "baño" : "eseejji",
    "barba" : "engaña",
    "barbasco " : "asashaka",
    "Serjania" : "shaka",
    "pinnata " : "shaka",
    "Paullinia " : "shaka",
    "triquetra" : "shaka",
    "barbasqueado" : "etajja",
    "barbasquear" : "naoo tajjakani, tajjakani",
    "barbudo" : "kianaa'asha",
    "barco" : "bishé",
    "barra brava" : "sajiakani",
    "barranco bajo" : "ekomee",
    "barranco alto" : "epawa",
    "barranco" : "ekweewe",
    "barrer" : "kwiashabakani",
    "barrero" : "mé",
    "barriga" : "emajjii",
    "barriga interior" : "see'ai",
    "barro" : "pepa",
    "bastón" : "akwi ejjakekwaka'akijji",
    "basura" : "shabo",
    "basurear" : "shabakani",
    "basurero" : "shabojiajji",
    "batán" : "mei etajjajji",
    "batir con instrumento" : "kekwajiawojjokani okani",
    "batir con la mano" : "iñajiawojjakani",
    "batir " : "jiawojjakani",
    "bato grande" : "bokao",
    "bato" : "sakwabeya",
    "bautizado" : "e'iñajianobia",
    "bebé sano y gordo" : "ebakwa tonatona",
    "bebé" : "ebakwa sho'i",
    "beber" : "ishikani",
    "tomar" : "ishikani",
    "beber una parte" : "ishisejjakani",
    "bebida" : "e'ishijji",
    "bejuco venenoso" : "jjonotajja",
    "bejuco" : "baajjono",
    "bejuco para barbasquear" : "",
    "benton " : "naawewi",
    "besar la mejjila" : "besar la mejjila",
    "besarse" : "jjanabatojjokiani",
    "bi blanco" : "shawetojjo",
    "bien adentro del monte" : "edojjoneineiyasijje",
    "bien maduro" : "etemeka",
    "bien tempranito" : "mekajjiawaneinei",
    "bien" : "kiapame",
    "bigote" : "ekwesha",
    "biribá " : "anona",
    "blanco" : "oshe",
    "blandito" : "tonatona",
    "blando " : "kiatona",
    "blando " : "kianoma nomanoma",
    "blanquillo " : "kweshabeje",
    "boca agria" : "kianabapase",
    "boca picante" : "kianabapajiji",
    "boca" : "enaba",
    "bocio" : "naa'ai",
    "bogar" : "jjeejjeyani",
    "flotar" : "jjeejjeyani",
    "boje de pescado" : "esobo",
    "bola del cuello" : "enaamowe",
    "bombo" : "ekwiakeyajji",
    "bonita" : "kia'oá kiabame",
    "borracho" : "ewoo",
    "preciosa" : "kiabame",
    "borrador" : "jebe",
    "goma" : "papenikwijji",
    "borrar" : "kwijiáka'iani",
    "bosque" : "ebio",
    "monte" : "ebio",
    "bostezar" : "a'akwani",
    "botado de la casa" : "ejiajia",
    "botado" : "ejiá",
    "botar de la boca" : "ojjajiakani",
    "botar el moco" : "wishijiakani",
    "botar" : "jiajiakani",
    "botella" : "taoo",
    "brasa" : "kwakikojjasha",
    "bravo" : "masemasiani",
    "enojado" : "masemasiani",
    "brazo" : "iaa",
    "brea" : "ekwiaabajji",
    "brillante" : "kiajiji",
    "búho" : "nabái",
    "brincar el pez en el agua" : "topiyani",
    "búho negro" : "biobió",
    "brincar en el piso" : "towáatowaani",
    "buitre" : "be'o",
    "broca" : "ejiachikwijji",
    "bullicioso" : "kiashajjakijjo",
    "ruidoso" : "kiashajjakijjo",
    "brocha" : "ekwia'ashajji",
    "bromear" : "jjamimiwe'ekiani we'ekani",
    "burlar" : "soadojokani",
    "bronce" : "mei wo'o",
    "burro gusano" : "Peluche",
    "brote de diente" : "sénaje akwimakwa",
    "bueno" : "kiapames",
    "bonito" : "kiapames",
    "lindo" : "kiapames",
    "bueno" : "kiapameneetii",
    "correcto" : "kiapameneetii",
    "burro " : "mapichi",
    "buscar" : "sa'ajjakani",
    "caballete de arriba" : "ekíwisa tajji",
    "caballete" : "ewisa",
    "punilla" : "ewisa",
    "caballo " : "mona",
    "cabecera del río" : "eyobi",
    "cabecera de la cama" : "esapajaajji",
    "cabello de choclo" : "nawa",
    "cabello largo" : "esao",
    "cabello trenzado" : "epashajjajja",
    "cabello" : "ewojjaña esapaña",
    "cabelludo" : "kiawojjañamoo",
    "cabeza" : "esapa sapa",
    "cabo del machete" : "baakajji",
    "cabo de la hacha" : "esowe",
    "caca" : "see",
    "cacao " : "kwaje",
    "cachapila" : "sebo",
    "cachete" : "ebose",
    "cachorro" : "iñáwewaja bakwa",
    "cada rato" : "majamaja",
    "cadáver" : "emanó'ioja eyami",
    "cadera" : "ejjobocha edana",
    "cadera trasera" : "ewa'osa",
    "caer" : "okiani",
    "caerse" : "okiani",
    "caerse derramarse" : "jjajiakiani",
    "caimán " : "sha'ejjame",
    "caja " : "ekwiakeyajji",
    "calabaza" : "jjemi",
    "joco" : "jjemi",
    "calabozo" : "ejjajianobiakijji",
    "calafatear" : "kekwanokokani",
    "calambre" : "jjekijjajjakani dewikani",
    "calamina" : "natajee baajee",
    "calcañar" : "ejiojjikiijjajja",
    "talón" : "ejiojjikiijjajja",
    "caldo de maíz" : "shijjená",
    "calentamiento global" : "kiyonobiani",
    "calentar comida" : " dawa ijjiakani",
    "calentar" : "kiyo'ijjiani",
    "calentó" : "dawa ijjiakanaje",
    "caliente" : "kiakiyo",
    "callapo de balsa" : "ewisipi",
    "callapo" : "akwijojeyo",
    "callarse" : "mimima'aniani",
    "calmado" : "kiakoé",
    "manso el río" : "kiakoé",
    "calmar la ola" : "neki'okekiani",
    "calmar dolor" : "kajikajiani wakiani",
    "calmar el enojo" : "tanakwakani",
    "calmarse el viento" : " beni neki'okekinaje",
    "calucha de cusi" : "jememe só",
    "calucha de motacú" : "eshijiso",
    "cangrejo" : "meeke",
    "canoa bailadora" : "bishé kajjajja",
    "canoso" : "sapa oshe",
    "cansado" : "shajomanoani",
    "cantar" : "sowikwayani",
    "cántaro" : "meshimisi",
    "caña" : "eka",
    "capibara" : "siobi",
    "capitán grande" : "emeshimese",
    "capullo" : "bibi",
    "calva" : "chijisisi",
    "calvo" : "sapapoji",
    "calvo completo" : "sapañama",
    "pelon" : "sapaña",
    "calvo de la frente" : "bawapoji",
    "calvo poco" : " wojjañama",
    "calzado, zapato" : "ejiojjishejee",
    "camaleón" : "shadaa",
    "cámara" : "ejjakajjakijji",
    "camarón" : "tapi",
    "cambiar de piel" : "jjajjiokiani",
    "caminar ligero" : "jiokwajikwajiani",
    "caminar" : "jiojioani",
    "camino angosto" : "ejiojjisisi",
    "caracha" : "chiji",
    "carachupa" : "soowi",
    "caracol pequeño" : "bashoshi",
    "caracol" : "shemo",
    "carambolero" : "kekwajakakani",
    "carancho " : "kosi",
    "carbón" : "kojjashá",
    "carbonizar" : "kiyoteweani",
    "cárcel" : "ejjajianobiakijji",
    "calabozo" : "ejjajianobiakijji",
    "cargar" : "ba'okani abokani",
    "carne del cuerpo" : "еуаті",
    "carne para comer" : "noé",
    "camino" : "ejiojji",
    "senda" : "ejiojji",
    "brecha" : "ejiojji",
    "caro" : "kiasosewiso",
    "costoso" : "kianawe",
    "camisa" : "daki yami",
    "camote" : "oca kwaeyo",
    "campana" : "ekwiakeyajji",
    "cana" : "sapa",
    "canasta" : "eshaja",
    "cesta" : "jjepái",
    "canasto hecho con hojas secas" : "bejjepi",
    "carpa" : "ekawijji",
    "carrao " : "wojjotawa",
    "carta" : "papeni etewe",
    "casa de jatata" : "sipi eki",
    "casa de reunion" : "eki ejjachichakijji",
    "casa" : "ekí",
    "vivienda" : "ekí",
    "cáscara" : "ejee",
    "cangrejo pequeño" : "basha",
    "casada" : "awejji",
    "casado" : "shakwijji",
    "casarse" : "jjawiakiani ",
    "casarse hombre" : "jjawanakiani",
    "cepillo" : "akwikekwashiyojji",
    "sierra" : "akwikekwashiyojji",
    "cera del oído" : "eshajja kabenana",
    "cera de la miel" : "winijji",
    "casarse" : "wanakani",
    "cascabel " : "ewojjachii",
    "cascajo" : "meipasaka",
    "cáscara de fruta" : "ejee",
    "cáscara de huevo" : "ejjii",
    "cáscara del miti" : "pichemejee",
    "casi" : "beshawanei",
    "causar" : "pomeekani",
    "provocar" : "pomeekani",
    "cavado" : "etió",
    "cavar con herramienta" : "tiokani",
    "cavar con mano" : "bojjokani",
    "cayendo" : "wojojoani",
    "cerca" : "klachipi",
    "cercar" : "peiikani",
    "cerco" : "jiyo",
    "cerdo" : "kwechi",
    "chancho" : "kwichi",
    "cerebro " : "esapadojjo",
    "seso" : "esapadojjo",
    "cerepapa " : "kokajji",
    "palometa" : "kokajji",
    "cernidor" : "ejiashajajji",
    "coladero" : "ejiashajajji",
    "cerquita" : "chipinéi",
    "cerquinga" : "chipinéi",
    "cazador de peces" : "kiabishi",
    "pescador" : "kiabishi",
    "cazador" : "niñejji",
    "cazador puntero" : "kiamepi",
    "cazadora roja" : "seta'ajja",
    "hormiga" : "seta'ajja",
    "cedrillo " : "dijji",
    "cedro " : "bishé",
    "ceja" : "ekojjasaña",
    "cerrado con candado" : "ekojjaka'a",
    "cerrado" : "eka'a",
    "cerrar" : "ka'aka'iani",
    "cerrarse" : "jjaka'akiani",
    "césped" : "sipone",
    "chaco remontado" : "ke jewajió",
    "chaco" : "chacra chacrra",
    "chaisita" : "kweibeje",
    "chala de arroz" : "anoso shaa",
    "chala de maíz" : "ekisha",
    "chala" : "eshaa",
    "chamairo " : "chameno",
    "chamuscar" : "kwiapojikani",
    "celoso" : "kia'iá",
    "ceniza" : "kwakimajjo kwakipoji",
    "chancho" : "kwechi",
    "cepillar madera" : "iñasiyokani",
    "chancho de tropa" : "ño",
    "cepillar cascos" : "kekwasiyokani",
    "chao" : "poki'ia",
    "cepillarse los dientes" : "kekwawojjokani",
    "charco" : "ena'ojjo",
    "cepillo de diente" : "esé kekwatopojji; esé",
    "charlar" : "kekwa'ishojji",
    "conversar" : "mimimimiani",
    "charquear" : "jewibejekani",
    "cepillo para madera" : "bishé kekwash",
    "charqui de pescado" : "naoo ejewibeje",
    "charqui de carne" : "noé ejewibeje",
    "chicha de yuca" : "ejjiwajjo",
    "chicharra" : "ta'a'a",
    "chichilo " : "yisa",
    "chico" : "kiabiso",
    "chilchi " : "enasisi",
    "chima" : "mae",
    "pupuña" : "mae",
    "chiquito" : "bisonei",
    "chirimoya" : "anona",
    "chismear" : "niñebakani",
    "chispear" : "taotawani",
    "chistear" : "jjawe'ekiani",
    "chistear a alguien" : "we'ekani",
    "bromear" : "we'ekani",
    "chivé" : "ejjitabo",
    "choclo" : "shijje sho'i",
    "choco" : "wojjajawa",
    "chocolate" : "kwajesó",
    "chofer" : "meshijjepojji wijiajji",
    "conductor" : "meshijjepojji wijiajji",
    "chonta " : "jjajjasiye",
    "choque eléctrico" : "kekwakojokani",
    "chotota" : "bokoko",
    "choza" : "ekisisi",
    "chubi" : "shemenene",
    "chubi negro" : "shia",
    "chuchío " : "bekiobo",
    "chulupi" : "chapa",
    "cucaracha " : "chapa",
    "chupete " : "tojjowí",
    "churo grande" : "kwaene",
    "churo " : "sijjajja",
    "chuto" : "wojja",
    "chuto de mano" : "mewojja",
    "ciego" : "kojjamá",
    "cielo azul" : "eyatawatawa",
    "cielo" : "eya",
    "ciempiés" : "sachichi",
    "cierto" : "c'ejojonei",
    "verdad" : "c'ejojonei",
    "cigarrillo" : "e'ijjiawichachajji",
    "cinco " : "meowejje",
    "cintura" : "emawawa",
    "cinturón" : "ejjaika'akijji",
    "clavar bien" : "kakape'ekani",
    "clavar" : "kakákani",
    "clavícula " : "ebeyojjosa",
    "clavo" : "baakojja",
    "clítoris" : "esó",
    "cocer" : "jiñani",
    "cocido" : "noé ekwakwa",
    "cocido came" : "ejiña jiñanaje",
    "cocina" : "ekwakwajji bobikwakwajji",
    "cocinando" : "kwakwakwakani",
    "cociné" : "kwakwanaje",
    "cocinera" : "bobikwakwajji",
    "codiciar" : "piaja akiana jiabakani",
    "codo" : "ebasho",
    "coger" : "wojokani",
    "recoger" : "wojokani",
    "cogollo" : "eyobo",
    "cojear" : "jiomijimijiani",
    "renguear" : "ki'aki'ani dejadejani",
    "cola de animales" : "ewa'o",
    "cola de la flecha" : "emeje kii",
    "coladero" : "ejiashajajji",
    "colar" : "kwiaabakani",
    "pegar" : "kwiaabakani",
    "unir" : "kwiaabakani",
    "colchón" : "ejaajji",
    "colgado" : "eba'e",
    "colgados" : "ba'e",
    "colgar algo arriba" : "ba'ewanasowakani",
    "colgar" : "yipekakani",
    "colibrí" : "kwa'ï'i",
    "collar" : "eljjt",
    "contento" : "kiabiwi kiabéi",
    "alegre" : "kiabiwi kiabéi",
    "colmena de abeja" : "meemeewini",
    "contento se puso" : "biwinaje",
    "colmillo" : "kwa'aojasé ejewijji",
    "contestar" : "saja'akani",
    "responder" : "saja'akani",
    "color café" : "powi",
    "conversar" : "mimimimiani",
    "columna" : "edaasa",
    "convencer" : "oya jjashawabakimeekikani",
    "comadreja" : "sejjesejje",
    "coquetear" : "beyobeyouni",
    "comer" : "ijjiakani",
    "comilón" : "kiabobinee",
    "comelón" : "kiabobinee",
    "coquino " : "shikikwi",
    "corajudo" : "Meseyajja'ama",
    "sin miedo" : "Meseyajja'ama",
    "corazón" : "ekijijji",
    "corona de pluma" : "boba",
    "corral" : "epeii",
    "correcto" : "kiapameneetii",
    "correr" : "kwajikwajiani",
    "como este" : "jikiajja",
    "cómo están ustedes" : "achajja'amiklana",
    "cómo" : "achajja",
    "por qué" : "yajjajje",
    "cómo estás" : "achajja'ami",
    "cómo será" : "achajjashaipome",
    "componer" : "kakábameka'iani",
    "comprado" : "ejjeshe",
    "comprar" : "jjesheaña",
    "comprar por comprar" : "jjeshejiákani",
    "comprometido" : "emesena",
    "comprometida" : "emesena",
    "comunidad" : "eba'ejji",
    "pueblo" : "eba'ejji",
    "con sed" : "kianabataja",
    "con otra" : "onanijje",
    "con quién" : "anijje",
    "con" : "nijje",
    "concha" : "bejjo",
    "cóndor" : "babosewawo",
    "conductor" : "meshijjepojji wijiajji",
    "conejo" : "shajjamisi",
    "conjuntivitis" : "kojjaboni",
    "conocer" : "ebá",
    "saber" : "ebá",
    "contagiar" : "piaja emanomeejjiya iñakani",
    "contagiarse" : "piaja emanomeejjiya iñakani",
    "contar " : "sikokani",
    "contar" : "wowikani",
    "avisar" : "wowikani",
    "relatar" : "wowikani",
    "cortado" : "ejewi",
    "cortadura" : "esi",
    "cortar con los dientes" : "ijjiasejjakani",
    "cortar" : "jewikani",
    "cortar" : "jewikani",
    "cortar con cuchillo" : "jewikani",
    "cortar el plátano" : "kojokani",
    "cortar con machete" : "jajakani",
    "cortar pelo" : "dedekani",
    "cortarse con machete" : "jjajajakiani",
    "cortarse con cuchillo" : "jjajewikiani",
    "corteza" : "ejee akwijee",
    "cortina" : "daki epenejji",
    "corto" : "kiachi'a",
    "cosa" : "akiana",
    "objeto" : "akiana",
    "cosechar" : "sejjaka'iani",
    "cosquillar" : "chokwikani",
    "cosquilloso" : "kiashaja",
    "costilla" : "edojjojjani",
    "costo" : "achesosewiso",
    "precio" : "achesosewiso",
    "costoso" : "kiasosewiso",
    "caro" : "kianawe",
    "costurar" : "sokokani",
    "cráneo" : "sapajjii",
    "creado" : "epana",
    "crear" : "panakani",
    "crecer" : "tiyani",
    "crespo" : "sapa jjajja",
    "cresta de aves" : "ewibiase wipiso",
    "creyente" : "ejjjashabaki'iojji",
    "criado" : "ojatiimee",
    "criar" : "tiimeekani wonekani",
    "crudo" : "eshe",
    "cruz" : "akwi'ekwiata'apee",
    "cruzado" : "etepeejje",
    "cruzar" : "besapokiani",
    "cuál" : "ache",
    "cuándo" : "acheshono",
    "cuánto de ancho" : "achekemo",
    "cuidado" : "koya",
    "advertencia" : "koya",
    "cuidante" : "ekljaawanajji",
    "cuánto de largura" : "ache ",
    "cuán largo" : "ache ",
    "cuánto" : "achewiso",
    "cuántos años tienes" : "ache shekiajawiso",
    "cuántos días" : "ache kawiwiso",
    "cuarto" : "ekekwaijji",
    "habitación" : "ekekwaijji",
    "cubrecama" : "ekipajaajji",
    "cucaracha" : "chapa",
    "cuchillo" : "ejewijji",
    "cuello de camisa" : "daki piki",
    "cuello" : "ena",
    "coto" : "ena",
    "cuerno" : "eshe'ana",
    "cuero de vaca" : "makajee wakajee",
    "cuero" : "ejee",
    "cuidado " : "kwawajo",
    "cuidar" : "kwiñakani",
    "cuidar con la vista" : "jaawanakani",
    "cuidarse" : "jjajaawanakiani",
    "cuidate" : "jjanawebakiani",
    "culebra" : "bakwatawa",
    "cumbre" : "emako",
    "cumbrera" : "ewisajaajji",
    "cumpleaños" : "epojja kwayajji",
    "cumplir" : "oja esowi jayojja akani",
    "cuñada" : "nene",
    "cuñada" : "shana",
    "cuñado" : "ewape",
    "cuota" : "ewana",
    "curandero" : "eyamikekwa",
    "curar" : "shikwikani",
    "curar mal de ojo" : "kojjashikwikani",
    "curiche" : "jjonoshasha",
    "curita " : "ekwiaabajji",
    "dame" : "okwae",
    "damelo " : "chemo",
    "danzante" : "pakeyani",
    "dar" : "kiakaní",
    "dar de comer" : "bobiakani",
    "dar de mamar" : "tojjoakani",
    "dar sombra" : "yejjemeekani",
    "dar vistazo" : "bajiakani",
    "darse vuelta" : "jjajiapajjakiani",
    "de allá, desde allá" : "jomajje",
    "de él" : "Ojaya",
    "su" : "Ojaya",
    "de ellos" : "onajaya",
    "de este tamaño" : "makemo",
    "de nada" : "oojja",
    "de noche" : "mekajje",
    "de nosotros" : "ekwanajaya",
    "de nosotros dos" : "ekwanaja",
    "de otra persona" : "onaja",
    "de otro país" : "pia jaajji",
    "de quién" : "ajia",
    "de un modo lento" : "japashineijje",
    "de un solo pie" : "tomiji",
    "de ustedes" : "mikianaja",
    "debajo de la tierra" : "meshikipajje",
    "debajo" : "ekimejjejje",
    "debil" : "weniniani",
    "decir lo mismo" : "oya esowi wowikani",
    "repetir" : "oya esowi wowikani",
    "decir" : "akani",
    "dedo del pie" : "ejiojjisisi",
    "dedo del medio" : "emé yiyesama",
    "meñique" : "emesisi",
    "meñique del pie" : "ejiojjisisi",
    "pulgar" : " emé ai",
    "pulgar del pie" : "ejiojji ai",
    "defecar" : "seyani",
    "defenderse" : "jjasósiakiani",
    "dejar de llover" : "ena nekikiani",
    "dejado en un lugar" : "ejianana",
    "dejar hondo" : "kishipejjapejjakani",
    "permitir" : "meekani",
    "dejar" : "meekani",
    "dejar de hablar" : "mimipajiani",
    "dejar en un lugar" : "jiajianaka'iani",
    "debilidad" : "kiashajomano",
    "debilidades" : "weniniani",
    "delgado de objetos" : "kiabeje",
    "delgado" : "chebisonei",
    "demorarse" : "kiashono",
    "atrasarse" : "kiashono",
    "denso" : "kiami'i",
    "dentista" : "esé kajjajiajji",
    "derramarse" : "jjajiakiani",
    "derecha" : "ebianéi",
    "derecho" : "ebañéi",
    "derramar" : "shojiakani",
    "derrumbar" : "sheshojiakani",
    "derrumbarse" : "dojokaki",
    "derrumbe" : "jjasheshokiani",
    "desaguar" : "nashojiakani",
    "echar agua" : "nashojiakani",
    "desamamantar" : "jjatojjosejjakiani",
    "desaparecer" : "jjachamakiani",
    "desatado" : "epichojia'io",
    "desatar" : "pichokani",
    "descansador" : "ejomishokajji",
    "descansar" : "jomishokani",
    "descosturar" : "jjawojokiani",
    "descuidado" : "jaawanawana'ajja",
    "desear cosas o comida" : "kwani",
    "desear a la persona" : "pojiá'ajjani",
    "te deseo" : "pojiá'ajjani",
    "desembarcar" : "jiasowakani",
    "desenganchar" : "pejokani",
    "desenojado" : "ejjabeiki'io",
    "desescamar" : "sopekwiakookani",
    "desgranando" : "pichepiche'ani",
    "desgranar" : "pichekani",
    "desgranar con golpes" : "kwiapichekani",
    "deshierbar" : "kekwawejakani",
    "deshinchar" : "shakwashakwa'iani",
    "desigual" : "oya jayoya pojjiama",
    "deslizador" : "yoo",
    "desmayarse" : "shakamanoani",
    "desnudo" : "jamapajipaji",
    "desnudos" : "dakimá",
    "desnutrido" : "kiabakwatai",
    "desnutrirse" : "jjajlikiakiani",
    "desobediente" : "shajjamá",
    "desobediente" : "jjashajja'ajjaki'ajja",
    "despacio" : "ekapashi",
    "desparramado" : "ejjajiaajaki",
    "desparramar" : "jiaajakani",
    "desparramarse" : "jjajiaajakiani",
    "despechar" : "jjatojjosejjakiani",
    "despejado" : "bomá",
    "despejados" : "kiajiá eya",
    "despellejar" : "jee'ishakani",
    "despengado" : "eshó",
    "despengar" : "jjashokiani",
    "despertar" : "shekiani",
    "despicar el arroz" : "kishiwojokani",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",

};

// Función para limpiar la frase eliminando puntuación
function limpiarFrase(frase) {
    return frase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
}

// Función para traducir una frase completa o palabra por palabra
function traducir(frase) {
    frase = limpiarFrase(frase.toLowerCase());
    // Verificar si la frase completa está en el diccionario
    if (diccionario[frase]) {
        return diccionario[frase];
    }

    // Si no, traducir palabra por palabra
    const palabras = frase.split(" ");
    const traduccion = palabras.map((palabra) =>
        diccionario[palabra] ? diccionario[palabra] : `[${palabra}]`
    );
    return traduccion.join(" ");
}

// Manejo del evento de clic en el botón
document.getElementById("traducir").addEventListener("click", () => {
    const entrada = document.getElementById("entrada").value;
    const resultado = traducir(entrada);
    document.getElementById("resultado").textContent = `Traducción: ${resultado}`;
});
