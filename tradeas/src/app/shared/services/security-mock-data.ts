import { Security } from './security';
import PouchDB from 'pouchdb';

export class SecurityMockData {
    private _pouchDb: PouchDB;
    
    constructor() {
        this._pouchDb = new PouchDB('http://localhost:5984/securities');
    }

    generateData(): Security[] {
        let json = '[{"_id":"1","companyName":"2GO Group Inc.","symbol":"2GO","sector":"Services","subSector":"Transportation Services"},{"_id":"2","companyName":"Asia Amalgamated Holdings Corporation","symbol":"AAA","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"3","companyName":"Atok-Big Wedge Co. Inc.","symbol":"AB","sector":"Mining and Oil","subSector":"Mining"},{"_id":"4","companyName":"AbaCore Capital Holdings Inc.","symbol":"ABA","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"5","companyName":"Allied Banking Corporation","symbol":"ABC","sector":"Financials","subSector":"Banks"},{"_id":"6","companyName":"Asiabest Group International Inc.","symbol":"ABG","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"7","companyName":"ABS-CBN Corporation","symbol":"ABS","sector":"Services","subSector":"Media"},{"_id":"8","companyName":"ABS-CBN Holdings Corporation","symbol":"ABSP","sector":"Services","subSector":"Media"},{"_id":"9","companyName":"Ayala Corporation","symbol":"AC","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"10","companyName":"Acesite (Phils.) Hotel Corporation","symbol":"ACE","sector":"Services","subSector":"Hotel and Leisure"},{"_id":"11","companyName":"Ayala Corporation Preferred A","symbol":"ACPA","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"12","companyName":"Ayala Corporation Preferred B","symbol":"ACPB","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"13","companyName":"Alsons Consolidated Resources Inc.","symbol":"ACR","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"14","companyName":"Aboitiz Equity Ventures Inc.","symbol":"AEV","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"15","companyName":"AG Finance Incorporated","symbol":"AGF","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"16","companyName":"Alliance Global Group Inc.","symbol":"AGI","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"17","companyName":"Arthaland Corporation","symbol":"ALCO","sector":"Property","subSector":"Property"},{"_id":"18","companyName":"Anchor Land Holdings Inc.","symbol":"ALHI","sector":"Property","subSector":"Property"},{"_id":"19","companyName":"Ayala Land Inc.","symbol":"ALI","sector":"Property","subSector":"Property"},{"_id":"20","companyName":"Alphaland Corporation","symbol":"ALPHA","sector":"Property","subSector":"Property"},{"_id":"21","companyName":"AgriNurture Inc.","symbol":"ANI","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"22","companyName":"A. Soriano Corporation","symbol":"ANS","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"23","companyName":"Aboitiz Power Corporation","symbol":"AP","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"24","companyName":"APC Group Inc.","symbol":"APC","sector":"Services","subSector":"Other Services"},{"_id":"25","companyName":"Anglo Philippine Holdings Corporation","symbol":"APO","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"26","companyName":"Apex Mining Co. Inc.","symbol":"APX","sector":"Mining and Oil","subSector":"Mining"},{"_id":"27","companyName":"Abra Mining and Industrial Corporation","symbol":"AR","sector":"Mining and Oil","subSector":"Mining"},{"_id":"28","companyName":"Araneta Properties Inc.","symbol":"ARA","sector":"Property","subSector":"Property"},{"_id":"29","companyName":"AsiaTrust Development Bank Inc.","symbol":"ASIA","sector":"Financials","subSector":"Banks"},{"_id":"30","companyName":"Atlas Consolidated Mining and Development Corporation","symbol":"AT","sector":"Mining and Oil","subSector":"Mining"},{"_id":"31","companyName":"Asian Terminals Inc.","symbol":"ATI","sector":"Services","subSector":"Transportation Services"},{"_id":"32","companyName":"ATN Holdings Inc. A","symbol":"ATN","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"33","companyName":"ATN Holdings Inc. B","symbol":"ATNB","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"34","companyName":"Asia United Bank Corporation","symbol":"AUB","sector":"Financials","subSector":"Banks"},{"_id":"35","companyName":"Benguet Corporation A","symbol":"BC","sector":"Mining and Oil","subSector":"Mining"},{"_id":"36","companyName":"Benguet Corporation B","symbol":"BCB","sector":"Mining and Oil","subSector":"Mining"},{"_id":"37","companyName":"Berjaya Philippines Inc.","symbol":"BCOR","sector":"Services","subSector":"Casinos and Gaming"},{"_id":"38","companyName":"Benguet Corporation Preferred","symbol":"BCP","sector":"Mining and Oil","subSector":"Mining"},{"_id":"39","companyName":"BDO Unibank Inc.","symbol":"BDO","sector":"Financials","subSector":"Banks"},{"_id":"40","companyName":"Belle Corporation","symbol":"BEL","sector":"Property","subSector":"Property"},{"_id":"41","companyName":"BHI Holdings Inc.","symbol":"BH","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"42","companyName":"Boulevard Holdings Inc.","symbol":"BHI","sector":"Services","subSector":"Hotel and Leisure"},{"_id":"43","companyName":"Bankard Inc.","symbol":"BKD","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"44","companyName":"BDO Leasing and Finance Inc.","symbol":"BLFI","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"45","companyName":"Bloomberry Resorts Corporation","symbol":"BLOOM","sector":"Services","subSector":"Casinos and Gaming"},{"_id":"46","companyName":"Bogo Medellin Milling Company Inc.","symbol":"BMM","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"47","companyName":"Bank of the Philippine Islands","symbol":"BPI","sector":"Financials","subSector":"Banks"},{"_id":"48","companyName":"A Brown Company Inc.","symbol":"BRN","sector":"Property","subSector":"Property"},{"_id":"49","companyName":"Basic Energy Corporation","symbol":"BSC","sector":"Mining and Oil","subSector":"Oil"},{"_id":"50","companyName":"Concrete Aggregates Corporation A","symbol":"CA","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"51","companyName":"Concrete Aggregates Corporation B","symbol":"CAB","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"52","companyName":"Calata Corporation","symbol":"CAL","sector":"Services","subSector":"Retail"},{"_id":"53","companyName":"Central Azucarera de Tarlac Inc.","symbol":"CAT","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"54","companyName":"Cityland Development Corporation","symbol":"CDC","sector":"Property","subSector":"Property"},{"_id":"55","companyName":"Cebu Air Inc.","symbol":"CEB","sector":"Services","subSector":"Transportation Services"},{"_id":"56","companyName":"Crown Equities Inc.","symbol":"CEI","sector":"Property","subSector":"Property"},{"_id":"57","companyName":"Centro Escolar University","symbol":"CEU","sector":"Services","subSector":"Education"},{"_id":"58","companyName":"Cebu Holdings Incorporated","symbol":"CHI","sector":"Property","subSector":"Property"},{"_id":"59","companyName":"China Banking Corporation","symbol":"CHIB","sector":"Financials","subSector":"Banks"},{"_id":"60","companyName":"Cirtek Holdings Philippines Corporation","symbol":"CHIPS","sector":"Industrial","subSector":"Electrical Components & Equipment"},{"_id":"61","companyName":"Concepcion Industrial Corporation","symbol":"CIC","sector":"Industrial","subSector":"Electrical Components & Equipment"},{"_id":"62","companyName":"Chemical Industries of the Philippines Inc.","symbol":"CIP","sector":"Industrial","subSector":"Chemicals"},{"_id":"63","companyName":"Southeast Asia Cement Holdings Inc.","symbol":"CMT","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"64","companyName":"Coal Asia Holdings Incorporated","symbol":"COAL","sector":"Mining and Oil","subSector":"Mining"},{"_id":"65","companyName":"Chemrez Technologies Inc.","symbol":"COAT","sector":"Industrial","subSector":"Chemicals"},{"_id":"66","companyName":"COL Financial Group Inc.","symbol":"COL","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"67","companyName":"Cosco Capital Inc.","symbol":"COSCO","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"68","companyName":"Century Properties Group Inc.","symbol":"CPG","sector":"Property","subSector":"Property"},{"_id":"69","companyName":"Century Peak Metals Holdings Corporation","symbol":"CPM","sector":"Mining and Oil","subSector":"Mining"},{"_id":"70","companyName":"Cebu Property Ventures and Development Corporation A","symbol":"CPV","sector":"Property","subSector":"Property"},{"_id":"71","companyName":"Cebu Property Ventures and Development Corporation B","symbol":"CPVB","sector":"Property","subSector":"Property"},{"_id":"72","companyName":"Citystate Savings Bank Inc.","symbol":"CSB","sector":"Financials","subSector":"Banks"},{"_id":"73","companyName":"Cyber Bay Corporation","symbol":"CYBR","sector":"Property","subSector":"Property"},{"_id":"74","companyName":"Da Vinci Capital Holdings Inc.","symbol":"DAVIN","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"75","companyName":"DFNN Inc.","symbol":"DFNN","sector":"Services","subSector":"Information Technology"},{"_id":"76","companyName":"Dizon Copper-Silver Mines Inc.","symbol":"DIZ","sector":"Mining and Oil","subSector":"Mining"},{"_id":"77","companyName":"DMCI Holdings Inc.","symbol":"DMC","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"78","companyName":"DMCI Holdings Inc. Preferred","symbol":"DMCP","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"79","companyName":"Del Monte Pacific Limited","symbol":"DMPL","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"80","companyName":"D&L Industries Inc.","symbol":"DNL","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"81","companyName":"Discovery World Corporation","symbol":"DWC","sector":"Services","subSector":"Hotel and Leisure"},{"_id":"82","companyName":"EasyCall Communications Philippines Inc.","symbol":"ECP","sector":"Services","subSector":"Other Services"},{"_id":"83","companyName":"Energy Development Corporation","symbol":"EDC","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"84","companyName":"EEI Corporation","symbol":"EEI","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"85","companyName":"IP E-Game Ventures Inc.","symbol":"EG","sector":"Services","subSector":"Casinos and Gaming"},{"_id":"86","companyName":"Export and Industry Bank Inc. A","symbol":"EIBA","sector":"Financials","subSector":"Banks"},{"_id":"87","companyName":"Export and Industry Bank Inc. B","symbol":"EIBB","sector":"Financials","subSector":"Banks"},{"_id":"88","companyName":"Empire East Land Holdings Inc.","symbol":"ELI","sector":"Property","subSector":"Property"},{"_id":"89","companyName":"Emperador Inc.","symbol":"EMP","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"90","companyName":"Euro-Med Laboratories Phil. Inc.","symbol":"EURO","sector":"Industrial","subSector":"Chemicals"},{"_id":"91","companyName":"Ever-Gotesco Resources and Holdings Inc.","symbol":"EVER","sector":"Property","subSector":"Property"},{"_id":"92","companyName":"East West Banking Corporation","symbol":"EW","sector":"Financials","subSector":"Banks"},{"_id":"93","companyName":"First Abacus Financial Holdings Corporation","symbol":"FAF","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"94","companyName":"Fil-Estate Corporation","symbol":"FC","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"95","companyName":"Filinvest Development Corporation","symbol":"FDC","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"96","companyName":"Federal Resources Investment Group Inc.","symbol":"FED","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"97","companyName":"Far Eastern University Incorporated","symbol":"FEU","sector":"Services","subSector":"Education"},{"_id":"98","companyName":"Filipino Fund Inc.","symbol":"FFI","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"99","companyName":"First Gen Corporation","symbol":"FGEN","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"100","companyName":"First Gen Corp. Preferred Series F","symbol":"FGENF","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"101","companyName":"First Gen Corp. Preferred Series G","symbol":"FGENG","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"102","companyName":"F & J Prince Holdings Corporation A","symbol":"FJP","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"103","companyName":"F & J Prince Holdings Corporation B","symbol":"FJPB","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"104","companyName":"Filinvest Land Inc.","symbol":"FLI","sector":"Property","subSector":"Property"},{"_id":"105","companyName":"First Metro Philippine Equity Exchange Traded Fund Inc.","symbol":"FMETF","sector":"Exchange Traded Fund (ETF)","subSector":"ETF-EQUITY"},{"_id":"106","companyName":"Alliance Select Foods International Inc.","symbol":"FOOD","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"107","companyName":"First Philippine Holdings Corporation","symbol":"FPH","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"108","companyName":"First Philippine Holdings Corporation Preferred","symbol":"FPHP","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"109","companyName":"Forum Pacific Inc.","symbol":"FPI","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"110","companyName":"Filsyn Corporation A","symbol":"FYN","sector":"Industrial","subSector":"Other Industrials"},{"_id":"111","companyName":"Filsyn Corporation B","symbol":"FYNB","sector":"Industrial","subSector":"Other Industrials"},{"_id":"112","companyName":"GEOGRACE Resources Philippines Inc.","symbol":"GEO","sector":"Mining and Oil","subSector":"Mining"},{"_id":"113","companyName":"Global-Estate Resorts Inc.","symbol":"GERI","sector":"Property","subSector":"Property"},{"_id":"114","companyName":"Globe Telecom Inc.","symbol":"GLO","sector":"Services","subSector":"Telecommunications"},{"_id":"115","companyName":"Globe Telecom Inc. Preferred Series A","symbol":"GLOPA","sector":"Services","subSector":"Telecommunications"},{"_id":"116","companyName":"GMA Network Inc.","symbol":"GMA7","sector":"Services","subSector":"Media"},{"_id":"117","companyName":"GMA Holdings Inc.","symbol":"GMAP","sector":"Services","subSector":"Media"},{"_id":"118","companyName":"Gotesco Land Inc. A","symbol":"GO","sector":"Property","subSector":"Property"},{"_id":"119","companyName":"Gotesco Land Inc. B","symbol":"GOB","sector":"Property","subSector":"Property"},{"_id":"120","companyName":"Grand Plaza Hotel Corporation","symbol":"GPH","sector":"Services","subSector":"Hotel and Leisure"},{"_id":"121","companyName":"Greenergy Holdings Incorporated","symbol":"GREEN","sector":"Industrial","subSector":"Electrical Components & Equipment"},{"_id":"122","companyName":"Ginebra San Miguel Inc.","symbol":"GSMI","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"123","companyName":"GT Capital Holdings Inc.","symbol":"GTCAP","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"124","companyName":"Calapan Ventures Inc.","symbol":"H2O","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"125","companyName":"House of Investments Inc.","symbol":"HI","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"126","companyName":"Holcim Philippines Inc.","symbol":"HLCM","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"127","companyName":"8990 Holdings Inc.","symbol":"HOUSE","sector":"Property","subSector":"Property"},{"_id":"128","companyName":"I-Remit Inc.","symbol":"I","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"129","companyName":"International Container Terminal Services Inc.","symbol":"ICT","sector":"Services","subSector":"Transportation Services"},{"_id":"130","companyName":"Integrated Micro-Electronics Inc.","symbol":"IMI","sector":"Industrial","subSector":"Electrical Components & Equipment"},{"_id":"131","companyName":"Imperial Resources Inc. A","symbol":"IMP","sector":"Services","subSector":"Information Technology"},{"_id":"132","companyName":"Imperial Resources Inc. B","symbol":"IMPB","sector":"Services","subSector":"Information Technology"},{"_id":"133","companyName":"Ionics Inc.","symbol":"ION","sector":"Industrial","subSector":"Electrical Components & Equipment"},{"_id":"134","companyName":"iPeople inc.","symbol":"IPO","sector":"Services","subSector":"Education"},{"_id":"135","companyName":"IRC Properties Inc.","symbol":"IRC","sector":"Property","subSector":"Property"},{"_id":"136","companyName":"Island Information & Technology Inc.","symbol":"IS","sector":"Services","subSector":"Information Technology"},{"_id":"137","companyName":"ISM Communications Corporation","symbol":"ISM","sector":"Services","subSector":"Information Technology"},{"_id":"138","companyName":"Jollibee Foods Corporation","symbol":"JFC","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"139","companyName":"JG Summit Holdings Inc.","symbol":"JGS","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"140","companyName":"Jolliville Holdings Corporation","symbol":"JOH","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"141","companyName":"Keppel Philippines Properties Inc.","symbol":"KEP","sector":"Property","subSector":"Property"},{"_id":"142","companyName":"Keppel Philippines Holdings Inc. A","symbol":"KPH","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"143","companyName":"Keppel Philippines Holdings Inc. B","symbol":"KPHB","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"144","companyName":"City & Land Developers Incorporated","symbol":"LAND","sector":"Property","subSector":"Property"},{"_id":"145","companyName":"Lepanto Consolidated Mining Company A","symbol":"LC","sector":"Mining and Oil","subSector":"Mining"},{"_id":"146","companyName":"Lepanto Consolidated Mining Company B","symbol":"LCB","sector":"Mining and Oil","subSector":"Mining"},{"_id":"147","companyName":"Liberty Flour Mills Inc.","symbol":"LFM","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"148","companyName":"Liberty Telecoms Holdings Inc.","symbol":"LIB","sector":"Services","subSector":"Telecommunications"},{"_id":"149","companyName":"Lodestar Investment Holdings Corporation","symbol":"LIHC","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"150","companyName":"LMG Chemicals Corporation","symbol":"LMG","sector":"Industrial","subSector":"Chemicals"},{"_id":"151","companyName":"Pacific Online Systems Corporation","symbol":"LOTO","sector":"Services","subSector":"Casinos and Gaming"},{"_id":"152","companyName":"Lopez Holdings Corporation","symbol":"LPZ","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"153","companyName":"Leisure & Resorts World Corporation","symbol":"LR","sector":"Services","subSector":"Casinos and Gaming"},{"_id":"154","companyName":"Lafarge Republic Inc.","symbol":"LRI","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"155","companyName":"Leisure & Resorts World Corporation Preferred","symbol":"LRP","sector":"Services","subSector":"Casinos and Gaming"},{"_id":"156","companyName":"Leisure & Resorts World Corporation Warrants","symbol":"LRW","sector":"Services","subSector":"Casinos and Gaming"},{"_id":"157","companyName":"Lorenzo Shipping Corporation","symbol":"LSC","sector":"Services","subSector":"Transportation Services"},{"_id":"158","companyName":"LT Group Inc.","symbol":"LTG","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"159","companyName":"Manila Mining Corporation A","symbol":"MA","sector":"Mining and Oil","subSector":"Mining"},{"_id":"160","companyName":"Manila Mining Corporation B","symbol":"MAB","sector":"Mining and Oil","subSector":"Mining"},{"_id":"161","companyName":"MacroAsia Corporation","symbol":"MAC","sector":"Services","subSector":"Transportation Services"},{"_id":"162","companyName":"Macay Holdings Inc.","symbol":"MACAY","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"163","companyName":"Metro Alliance Holdings & Equities Corp. A","symbol":"MAH","sector":"Industrial","subSector":"Chemicals"},{"_id":"164","companyName":"Metro Alliance Holdings & Equities Corp. B","symbol":"MAHB","sector":"Industrial","subSector":"Chemicals"},{"_id":"165","companyName":"Marcventures Holdings Inc.","symbol":"MARC","sector":"Mining and Oil","subSector":"Mining"},{"_id":"166","companyName":"Manila Bulletin Publishing Corporation","symbol":"MB","sector":"Services","subSector":"Media"},{"_id":"167","companyName":"Manila Broadcasting Company","symbol":"MBC","sector":"Services","subSector":"Media"},{"_id":"168","companyName":"Metropolitan Bank & Trust Company","symbol":"MBT","sector":"Financials","subSector":"Banks"},{"_id":"169","companyName":"Marsteel Consolidated Inc. A","symbol":"MC","sector":"Property","subSector":"Property"},{"_id":"170","companyName":"Marsteel Consolidated Inc. B","symbol":"MCB","sector":"Property","subSector":"Property"},{"_id":"171","companyName":"Melco Crown (Philippines) Resorts Corporation","symbol":"MCP","sector":"Services","subSector":"Casinos and Gaming"},{"_id":"172","companyName":"MEDCO Holdings Inc.","symbol":"MED","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"173","companyName":"Megaworld Corporation","symbol":"MEG","sector":"Property","subSector":"Property"},{"_id":"174","companyName":"Megaworld Corporation Warrants 1","symbol":"MEGW1","sector":"Property","subSector":"Property"},{"_id":"175","companyName":"Megaworld Corporation Warrants 2","symbol":"MEGW2","sector":"Property","subSector":"Property"},{"_id":"176","companyName":"Manila Electric Company","symbol":"MER","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"177","companyName":"Manulife Financial Corporation","symbol":"MFC","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"178","companyName":"Makati Finance Corporation","symbol":"MFIN","sector":"Small Medium & Emerging Board","subSector":"Small Medium & Emerging Board"},{"_id":"179","companyName":"Millennium Global Holdings Inc.","symbol":"MG","sector":"Services","subSector":"Information Technology"},{"_id":"180","companyName":"Mabuhay Holdings Corporation","symbol":"MHC","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"181","companyName":"Minerales Industrias Corporation","symbol":"MIC","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"182","companyName":"Manila Jockey Club Inc.","symbol":"MJC","sector":"Services","subSector":"Casinos and Gaming"},{"_id":"183","companyName":"MJC Investments Corporation","symbol":"MJIC","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"184","companyName":"Metro Pacific Investments Corporation","symbol":"MPI","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"185","companyName":"MRC Allied Inc.","symbol":"MRC","sector":"Property","subSector":"Property"},{"_id":"186","companyName":"Mabuhay Vinyl Corporation","symbol":"MVC","sector":"Industrial","subSector":"Chemicals"},{"_id":"187","companyName":"Manila Water Company Inc.","symbol":"MWC","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"188","companyName":"Megawide Construction Corporation","symbol":"MWIDE","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"189","companyName":"NiHAO Mineral Resources International Inc.","symbol":"NI","sector":"Mining and Oil","subSector":"Mining"},{"_id":"190","companyName":"Nickel Asia Corporation","symbol":"NIKL","sector":"Mining and Oil","subSector":"Mining"},{"_id":"191","companyName":"Now Corporation","symbol":"NOW","sector":"Services","subSector":"Other Services"},{"_id":"192","companyName":"National Reinsurance Corporation of the Philippines","symbol":"NRCP","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"193","companyName":"NextStage Inc.","symbol":"NXT","sector":"Services","subSector":"Information Technology"},{"_id":"194","companyName":"Omico Corporation","symbol":"OM","sector":"Mining and Oil","subSector":"Mining"},{"_id":"195","companyName":"Oriental Petroleum and Minerals Corporation A","symbol":"OPM","sector":"Mining and Oil","subSector":"Oil"},{"_id":"196","companyName":"Oriental Petroleum and Minerals Corporation B","symbol":"OPMB","sector":"Mining and Oil","subSector":"Oil"},{"_id":"197","companyName":"Oriental Peninsula Resources Group Inc.","symbol":"ORE","sector":"Mining and Oil","subSector":"Mining"},{"_id":"198","companyName":"The Philodrill Corporation","symbol":"OV","sector":"Mining and Oil","subSector":"Oil"},{"_id":"199","companyName":"Pacifica Inc.","symbol":"PA","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"200","companyName":"PAL Holdings Inc.","symbol":"PAL","sector":"Services","subSector":"Transportation Services"},{"_id":"201","companyName":"Paxys Inc.","symbol":"PAX","sector":"Services","subSector":"Other Services"},{"_id":"202","companyName":"Philippine Business Bank","symbol":"PBB","sector":"Financials","subSector":"Banks"},{"_id":"203","companyName":"Philippine Bank of Communications","symbol":"PBC","sector":"Financials","subSector":"Banks"},{"_id":"204","companyName":"Pancake House Inc.","symbol":"PCKH","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"205","companyName":"Petron Corporation","symbol":"PCOR","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"206","companyName":"PICOP Resources Inc.","symbol":"PCP","sector":"Industrial","subSector":"Other Industrials"},{"_id":"207","companyName":"PetroEnergy Resources Corporation","symbol":"PERC","sector":"Mining and Oil","subSector":"Oil"},{"_id":"208","companyName":"San Miguel Pure Foods Company Inc.","symbol":"PF","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"209","companyName":"San Miguel Pure Foods Company Inc. Preferred","symbol":"PFP","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"210","companyName":"Puregold Price Club Inc.","symbol":"PGOLD","sector":"Services","subSector":"Retail"},{"_id":"211","companyName":"Premiere Horizon Alliance Corporation","symbol":"PHA","sector":"Services","subSector":"Casinos and Gaming"},{"_id":"212","companyName":"Philcomsat Holdings Corporation","symbol":"PHC","sector":"Services","subSector":"Other Services"},{"_id":"213","companyName":"Philippine Estates Corporation","symbol":"PHES","sector":"Property","subSector":"Property"},{"_id":"214","companyName":"Phinma Corporation","symbol":"PHN","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"215","companyName":"Pepsi-Cola Products Philippines Inc.","symbol":"PIP","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"216","companyName":"Panasonic Manufacturing Philippines Corporation","symbol":"PMPC","sector":"Industrial","subSector":"Electrical Components & Equipment"},{"_id":"217","companyName":"Primetown Property Group Inc.","symbol":"PMT","sector":"Property","subSector":"Property"},{"_id":"218","companyName":"Philippine National Bank","symbol":"PNB","sector":"Financials","subSector":"Banks"},{"_id":"219","companyName":"Philippine National Construction Corporation","symbol":"PNC","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"220","companyName":"Phoenix Petroleum Philippines Inc.","symbol":"PNX","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"221","companyName":"Prime Orion Philippines Inc.","symbol":"POPI","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"222","companyName":"Globalport 900 Inc.","symbol":"PORT","sector":"Services","subSector":"Transportation Services"},{"_id":"223","companyName":"Pryce Corporation","symbol":"PPC","sector":"Industrial","subSector":"Chemicals"},{"_id":"224","companyName":"Petron Corporation","symbol":"PPREF","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"225","companyName":"Philippine Racing Club Inc.","symbol":"PRC","sector":"Services","subSector":"Casinos and Gaming"},{"_id":"226","companyName":"Prime Media Holdings Inc.","symbol":"PRIM","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"227","companyName":"Primex Corporation","symbol":"PRMX","sector":"Property","subSector":"Property"},{"_id":"228","companyName":"Philippine Savings Bank","symbol":"PSB","sector":"Financials","subSector":"Banks"},{"_id":"229","companyName":"The Philippine Stock Exchange Inc.","symbol":"PSE","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"230","companyName":"Philippine Trust Company","symbol":"PTC","sector":"Financials","subSector":"Banks"},{"_id":"231","companyName":"Philippine Telegraph and Telephone Corporation","symbol":"PTT","sector":"Services","subSector":"Telecommunications"},{"_id":"232","companyName":"Philex Mining Corporation","symbol":"PX","sector":"Mining and Oil","subSector":"Mining"},{"_id":"233","companyName":"Philex Petroleum Corporation","symbol":"PXP","sector":"Mining and Oil","subSector":"Oil"},{"_id":"234","companyName":"Rizal Commercial Banking Corporation","symbol":"RCB","sector":"Financials","subSector":"Banks"},{"_id":"235","companyName":"Roxas and Company Inc.","symbol":"RCI","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"236","companyName":"Republic Glass Holdings Corporation","symbol":"REG","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"237","companyName":"RFM Corporation","symbol":"RFM","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"238","companyName":"Robinsons Land Corporation","symbol":"RLC","sector":"Property","subSector":"Property"},{"_id":"239","companyName":"Philippine Realty and Holdings Corporation","symbol":"RLT","sector":"Property","subSector":"Property"},{"_id":"240","companyName":"Rockwell Land Corporation","symbol":"ROCK","sector":"Property","subSector":"Property"},{"_id":"241","companyName":"Roxas Holdings Inc.","symbol":"ROX","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"242","companyName":"iRipple Inc.","symbol":"RPL","sector":"Small Medium & Emerging Board","subSector":"Small Medium & Emerging Board"},{"_id":"243","companyName":"Robinsons Retail Holdings Inc.","symbol":"RRHI","sector":"Services","subSector":"Retail"},{"_id":"244","companyName":"Travellers International Hotel Group Inc.","symbol":"RWM","sector":"Services","subSector":"Casinos and Gaming"},{"_id":"245","companyName":"Semirara Mining Corporation","symbol":"SCC","sector":"Mining and Oil","subSector":"Mining"},{"_id":"246","companyName":"Security Bank Corporation","symbol":"SECB","sector":"Financials","subSector":"Banks"},{"_id":"247","companyName":"Philippine Seven Corporation","symbol":"SEVN","sector":"Services","subSector":"Retail"},{"_id":"248","companyName":"Swift Foods Inc.","symbol":"SFI","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"249","companyName":"Swift Foods Inc. Preferred","symbol":"SFIP","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"250","companyName":"Solid Group Inc.","symbol":"SGI","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"251","companyName":"Synergy Grid & Development Phils. Inc.","symbol":"SGP","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"252","companyName":"Shang Properties Inc.","symbol":"SHNG","sector":"Property","subSector":"Property"},{"_id":"253","companyName":"Sinophil Corporation","symbol":"SINO","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"254","companyName":"Sun Life Financial Inc.","symbol":"SLF","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"255","companyName":"Sta. Lucia Land Inc.","symbol":"SLI","sector":"Property","subSector":"Property"},{"_id":"256","companyName":"SM Investments Corporation","symbol":"SM","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"257","companyName":"San Miguel Corporation","symbol":"SMC","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"258","companyName":"San Miguel Corporation Preferred Series 2A","symbol":"SMC2A","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"259","companyName":"San Miguel Corporation Preferred Series 2B","symbol":"SMC2B","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"260","companyName":"San Miguel Corporation Preferred Series 1","symbol":"SMCP1","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"261","companyName":"SM Prime Holdings Inc.","symbol":"SMPH","sector":"Property","subSector":"Property"},{"_id":"262","companyName":"South China Resources Inc.","symbol":"SOC","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"263","companyName":"SPC Power Corporation","symbol":"SPC","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"264","companyName":"Splash Corporation","symbol":"SPH","sector":"Industrial","subSector":"Other Industrials"},{"_id":"265","companyName":"Seafront Resources Corporation","symbol":"SPM","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"266","companyName":"Supercity Realty Development Corporation","symbol":"SRDC","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"267","companyName":"STI Education Systems Holdings Inc.","symbol":"STI","sector":"Services","subSector":"Education"},{"_id":"268","companyName":"Steniel Manufacturing Corporation","symbol":"STN","sector":"Industrial","subSector":"Other Industrials"},{"_id":"269","companyName":"Starmalls Inc.","symbol":"STR","sector":"Property","subSector":"Property"},{"_id":"270","companyName":"Suntrust Home Developers Inc.","symbol":"SUN","sector":"Property","subSector":"Property"},{"_id":"271","companyName":"TKC Steel Corporation","symbol":"T","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"272","companyName":"Trans-Asia Oil and Energy Development Corporation","symbol":"TA","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"273","companyName":"Transpacific Broadband Group Int`l. Inc.","symbol":"TBGI","sector":"Services","subSector":"Information Technology"},{"_id":"274","companyName":"Philippine Long Distance Telephone Company","symbol":"TEL","sector":"Services","subSector":"Telecommunications"},{"_id":"275","companyName":"Philippine Tobacco Flue-Curing & Redrying Corporation","symbol":"TFC","sector":"Property","subSector":"Property"},{"_id":"276","companyName":"Top Frontier Investment Holdings Inc.","symbol":"TFHI","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"277","companyName":"Philippine Long Distance Telephone Company","symbol":"TLHH","sector":"Services","subSector":"Telecommunications"},{"_id":"278","companyName":"Harbor Star Shipping Services Inc.","symbol":"TUGS","sector":"Services","subSector":"Transportation Services"},{"_id":"279","companyName":"Union Bank of the Philippines Inc.","symbol":"UBP","sector":"Financials","subSector":"Banks"},{"_id":"280","companyName":"Unioil Resources & Holdings Company Inc.","symbol":"UNI","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"281","companyName":"United Paragon Mining Corporation","symbol":"UPM","sector":"Mining and Oil","subSector":"Mining"},{"_id":"282","companyName":"Universal Robina Corporation","symbol":"URC","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"283","companyName":"Uniwide Holdings Inc.","symbol":"UW","sector":"Property","subSector":"Property"},{"_id":"284","companyName":"Vantage Equities Inc.","symbol":"V","sector":"Financials","subSector":"Other Financial Institutions"},{"_id":"285","companyName":"Vitarich Corporation","symbol":"VITA","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"286","companyName":"Vista Land & Lifescapes Inc.","symbol":"VLL","sector":"Property","subSector":"Property"},{"_id":"287","companyName":"Victorias Milling Company Inc.","symbol":"VMC","sector":"Industrial","subSector":"Food Beverage & Tobacco"},{"_id":"288","companyName":"Vulcan Industrial & Mining Corporation","symbol":"VUL","sector":"Industrial","subSector":"Construction Infrastructure & Allied Services"},{"_id":"289","companyName":"Vivant Corporation","symbol":"VVT","sector":"Industrial","subSector":"Electricity Energy Power & Water"},{"_id":"290","companyName":"PhilWeb Corporation","symbol":"WEB","sector":"Services","subSector":"Information Technology"},{"_id":"291","companyName":"Wellex Industries Incorporated","symbol":"WIN","sector":"Holding Firms","subSector":"Holding Firms"},{"_id":"292","companyName":"Waterfront Philippines Incorporated","symbol":"WPI","sector":"Services","subSector":"Hotel and Leisure"},{"_id":"293","companyName":"YEHEY! Corporation","symbol":"YEHEY","sector":"Services","subSector":"Information Technology"},{"_id":"294","companyName":"Zeus Holdings Inc.","symbol":"ZHI","sector":"Holding Firms","subSector":"Holding Firms"}]';
        let securitiesJson: any = JSON.parse(json); // string to generic object first
        let securities: Security[] = <Security[]>securitiesJson;
        this._pouchDb.bulkDocs(securities);
        return securities;
    }
}