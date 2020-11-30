​​/** 
* 0 工作日 
* 1 周末 
* 2 节假日 
*/  
​var 2019days = [{"dayStr":"20190101","type":"2"},{"dayStr":"20190102","type":"0"},{"dayStr":"20190103","type":"0"},{"dayStr":"20190104","type":"0"},{"dayStr":"20190105","type":"1"},{"dayStr":"20190106","type":"1"},{"dayStr":"20190107","type":"0"},{"dayStr":"20190108","type":"0"},{"dayStr":"20190109","type":"0"},{"dayStr":"20190110","type":"0"},{"dayStr":"20190111","type":"0"},{"dayStr":"20190112","type":"1"},{"dayStr":"20190113","type":"1"},{"dayStr":"20190114","type":"0"},{"dayStr":"20190115","type":"0"},{"dayStr":"20190116","type":"0"},{"dayStr":"20190117","type":"0"},{"dayStr":"20190118","type":"0"},{"dayStr":"20190119","type":"1"},{"dayStr":"20190120","type":"1"},{"dayStr":"20190121","type":"0"},{"dayStr":"20190122","type":"0"},{"dayStr":"20190123","type":"0"},{"dayStr":"20190124","type":"0"},{"dayStr":"20190125","type":"0"},{"dayStr":"20190126","type":"1"},{"dayStr":"20190127","type":"1"},{"dayStr":"20190128","type":"0"},{"dayStr":"20190129","type":"0"},{"dayStr":"20190130","type":"0"},{"dayStr":"20190131","type":"0"},{"dayStr":"20190201","type":"0"},{"dayStr":"20190202","type":"0"},{"dayStr":"20190203","type":"0"},{"dayStr":"20190204","type":"2"},{"dayStr":"20190205","type":"2"},{"dayStr":"20190206","type":"2"},{"dayStr":"20190207","type":"2"},{"dayStr":"20190208","type":"2"},{"dayStr":"20190209","type":"2"},{"dayStr":"20190210","type":"2"},{"dayStr":"20190211","type":"0"},{"dayStr":"20190212","type":"0"},{"dayStr":"20190213","type":"0"},{"dayStr":"20190214","type":"0"},{"dayStr":"20190215","type":"0"},{"dayStr":"20190216","type":"1"},{"dayStr":"20190217","type":"1"},{"dayStr":"20190218","type":"0"},{"dayStr":"20190219","type":"0"},{"dayStr":"20190220","type":"0"},{"dayStr":"20190221","type":"0"},{"dayStr":"20190222","type":"0"},{"dayStr":"20190223","type":"1"},{"dayStr":"20190224","type":"1"},{"dayStr":"20190225","type":"0"},{"dayStr":"20190226","type":"0"},{"dayStr":"20190227","type":"0"},{"dayStr":"20190228","type":"0"},{"dayStr":"20190301","type":"0"},{"dayStr":"20190302","type":"1"},{"dayStr":"20190303","type":"1"},{"dayStr":"20190304","type":"0"},{"dayStr":"20190305","type":"0"},{"dayStr":"20190306","type":"0"},{"dayStr":"20190307","type":"0"},{"dayStr":"20190308","type":"0"},{"dayStr":"20190309","type":"1"},{"dayStr":"20190310","type":"1"},{"dayStr":"20190311","type":"0"},{"dayStr":"20190312","type":"0"},{"dayStr":"20190313","type":"0"},{"dayStr":"20190314","type":"0"},{"dayStr":"20190315","type":"0"},{"dayStr":"20190316","type":"1"},{"dayStr":"20190317","type":"1"},{"dayStr":"20190318","type":"0"},{"dayStr":"20190319","type":"0"},{"dayStr":"20190320","type":"0"},{"dayStr":"20190321","type":"0"},{"dayStr":"20190322","type":"0"},{"dayStr":"20190323","type":"1"},{"dayStr":"20190324","type":"1"},{"dayStr":"20190325","type":"0"},{"dayStr":"20190326","type":"0"},{"dayStr":"20190327","type":"0"},{"dayStr":"20190328","type":"0"},{"dayStr":"20190329","type":"0"},{"dayStr":"20190330","type":"1"},{"dayStr":"20190331","type":"1"},{"dayStr":"20190401","type":"0"},{"dayStr":"20190402","type":"0"},{"dayStr":"20190403","type":"0"},{"dayStr":"20190404","type":"0"},{"dayStr":"20190405","type":"2"},{"dayStr":"20190406","type":"2"},{"dayStr":"20190407","type":"2"},{"dayStr":"20190408","type":"0"},{"dayStr":"20190409","type":"0"},{"dayStr":"20190410","type":"0"},{"dayStr":"20190411","type":"0"},{"dayStr":"20190412","type":"0"},{"dayStr":"20190413","type":"1"},{"dayStr":"20190414","type":"1"},{"dayStr":"20190415","type":"0"},{"dayStr":"20190416","type":"0"},{"dayStr":"20190417","type":"0"},{"dayStr":"20190418","type":"0"},{"dayStr":"20190419","type":"0"},{"dayStr":"20190420","type":"1"},{"dayStr":"20190421","type":"1"},{"dayStr":"20190422","type":"0"},{"dayStr":"20190423","type":"0"},{"dayStr":"20190424","type":"0"},{"dayStr":"20190425","type":"0"},{"dayStr":"20190426","type":"0"},{"dayStr":"20190427","type":"1"},{"dayStr":"20190428","type":"0"},{"dayStr":"20190429","type":"0"},{"dayStr":"20190430","type":"0"},{"dayStr":"20190501","type":"2"},{"dayStr":"20190502","type":"0"},{"dayStr":"20190503","type":"0"},{"dayStr":"20190504","type":"1"},{"dayStr":"20190505","type":"0"},{"dayStr":"20190506","type":"0"},{"dayStr":"20190507","type":"0"},{"dayStr":"20190508","type":"0"},{"dayStr":"20190509","type":"0"},{"dayStr":"20190510","type":"0"},{"dayStr":"20190511","type":"1"},{"dayStr":"20190512","type":"1"},{"dayStr":"20190513","type":"0"},{"dayStr":"20190514","type":"0"},{"dayStr":"20190515","type":"0"},{"dayStr":"20190516","type":"0"},{"dayStr":"20190517","type":"0"},{"dayStr":"20190518","type":"1"},{"dayStr":"20190519","type":"1"},{"dayStr":"20190520","type":"0"},{"dayStr":"20190521","type":"0"},{"dayStr":"20190522","type":"0"},{"dayStr":"20190523","type":"0"},{"dayStr":"20190524","type":"0"},{"dayStr":"20190525","type":"1"},{"dayStr":"20190526","type":"1"},{"dayStr":"20190527","type":"0"},{"dayStr":"20190528","type":"0"},{"dayStr":"20190529","type":"0"},{"dayStr":"20190530","type":"0"},{"dayStr":"20190531","type":"0"},{"dayStr":"20190601","type":"1"},{"dayStr":"20190602","type":"1"},{"dayStr":"20190603","type":"0"},{"dayStr":"20190604","type":"0"},{"dayStr":"20190605","type":"0"},{"dayStr":"20190606","type":"0"},{"dayStr":"20190607","type":"2"},{"dayStr":"20190608","type":"2"},{"dayStr":"20190609","type":"2"},{"dayStr":"20190610","type":"0"},{"dayStr":"20190611","type":"0"},{"dayStr":"20190612","type":"0"},{"dayStr":"20190613","type":"0"},{"dayStr":"20190614","type":"0"},{"dayStr":"20190615","type":"1"},{"dayStr":"20190616","type":"1"},{"dayStr":"20190617","type":"0"},{"dayStr":"20190618","type":"0"},{"dayStr":"20190619","type":"0"},{"dayStr":"20190620","type":"0"},{"dayStr":"20190621","type":"0"},{"dayStr":"20190622","type":"1"},{"dayStr":"20190623","type":"1"},{"dayStr":"20190624","type":"0"},{"dayStr":"20190625","type":"0"},{"dayStr":"20190626","type":"0"},{"dayStr":"20190627","type":"0"},{"dayStr":"20190628","type":"0"},{"dayStr":"20190629","type":"1"},{"dayStr":"20190630","type":"1"},{"dayStr":"20190701","type":"0"},{"dayStr":"20190702","type":"0"},{"dayStr":"20190703","type":"0"},{"dayStr":"20190704","type":"0"},{"dayStr":"20190705","type":"0"},{"dayStr":"20190706","type":"1"},{"dayStr":"20190707","type":"1"},{"dayStr":"20190708","type":"0"},{"dayStr":"20190709","type":"0"},{"dayStr":"20190710","type":"0"},{"dayStr":"20190711","type":"0"},{"dayStr":"20190712","type":"0"},{"dayStr":"20190713","type":"1"},{"dayStr":"20190714","type":"1"},{"dayStr":"20190715","type":"0"},{"dayStr":"20190716","type":"0"},{"dayStr":"20190717","type":"0"},{"dayStr":"20190718","type":"0"},{"dayStr":"20190719","type":"0"},{"dayStr":"20190720","type":"1"},{"dayStr":"20190721","type":"1"},{"dayStr":"20190722","type":"0"},{"dayStr":"20190723","type":"0"},{"dayStr":"20190724","type":"0"},{"dayStr":"20190725","type":"0"},{"dayStr":"20190726","type":"0"},{"dayStr":"20190727","type":"1"},{"dayStr":"20190728","type":"1"},{"dayStr":"20190729","type":"0"},{"dayStr":"20190730","type":"0"},{"dayStr":"20190731","type":"0"},{"dayStr":"20190801","type":"0"},{"dayStr":"20190802","type":"0"},{"dayStr":"20190803","type":"1"},{"dayStr":"20190804","type":"1"},{"dayStr":"20190805","type":"0"},{"dayStr":"20190806","type":"0"},{"dayStr":"20190807","type":"0"},{"dayStr":"20190808","type":"0"},{"dayStr":"20190809","type":"0"},{"dayStr":"20190810","type":"1"},{"dayStr":"20190811","type":"1"},{"dayStr":"20190812","type":"0"},{"dayStr":"20190813","type":"0"},{"dayStr":"20190814","type":"0"},{"dayStr":"20190815","type":"0"},{"dayStr":"20190816","type":"0"},{"dayStr":"20190817","type":"1"},{"dayStr":"20190818","type":"1"},{"dayStr":"20190819","type":"0"},{"dayStr":"20190820","type":"0"},{"dayStr":"20190821","type":"0"},{"dayStr":"20190822","type":"0"},{"dayStr":"20190823","type":"0"},{"dayStr":"20190824","type":"1"},{"dayStr":"20190825","type":"1"},{"dayStr":"20190826","type":"0"},{"dayStr":"20190827","type":"0"},{"dayStr":"20190828","type":"0"},{"dayStr":"20190829","type":"0"},{"dayStr":"20190830","type":"0"},{"dayStr":"20190831","type":"1"},{"dayStr":"20190901","type":"1"},{"dayStr":"20190902","type":"0"},{"dayStr":"20190903","type":"0"},{"dayStr":"20190904","type":"0"},{"dayStr":"20190905","type":"0"},{"dayStr":"20190906","type":"0"},{"dayStr":"20190907","type":"1"},{"dayStr":"20190908","type":"1"},{"dayStr":"20190909","type":"0"},{"dayStr":"20190910","type":"0"},{"dayStr":"20190911","type":"0"},{"dayStr":"20190912","type":"0"},{"dayStr":"20190913","type":"2"},{"dayStr":"20190914","type":"2"},{"dayStr":"20190915","type":"2"},{"dayStr":"20190916","type":"0"},{"dayStr":"20190917","type":"0"},{"dayStr":"20190918","type":"0"},{"dayStr":"20190919","type":"0"},{"dayStr":"20190920","type":"0"},{"dayStr":"20190921","type":"1"},{"dayStr":"20190922","type":"1"},{"dayStr":"20190923","type":"0"},{"dayStr":"20190924","type":"0"},{"dayStr":"20190925","type":"0"},{"dayStr":"20190926","type":"0"},{"dayStr":"20190927","type":"0"},{"dayStr":"20190928","type":"1"},{"dayStr":"20190929","type":"0"},{"dayStr":"20190930","type":"0"},{"dayStr":"20191001","type":"2"},{"dayStr":"20191002","type":"2"},{"dayStr":"20191003","type":"2"},{"dayStr":"20191004","type":"2"},{"dayStr":"20191005","type":"2"},{"dayStr":"20191006","type":"2"},{"dayStr":"20191007","type":"2"},{"dayStr":"20191008","type":"0"},{"dayStr":"20191009","type":"0"},{"dayStr":"20191010","type":"0"},{"dayStr":"20191011","type":"0"},{"dayStr":"20191012","type":"0"},{"dayStr":"20191013","type":"1"},{"dayStr":"20191014","type":"0"},{"dayStr":"20191015","type":"0"},{"dayStr":"20191016","type":"0"},{"dayStr":"20191017","type":"0"},{"dayStr":"20191018","type":"0"},{"dayStr":"20191019","type":"1"},{"dayStr":"20191020","type":"1"},{"dayStr":"20191021","type":"0"},{"dayStr":"20191022","type":"0"},{"dayStr":"20191023","type":"0"},{"dayStr":"20191024","type":"0"},{"dayStr":"20191025","type":"0"},{"dayStr":"20191026","type":"1"},{"dayStr":"20191027","type":"1"},{"dayStr":"20191028","type":"0"},{"dayStr":"20191029","type":"0"},{"dayStr":"20191030","type":"0"},{"dayStr":"20191031","type":"0"},{"dayStr":"20191101","type":"0"},{"dayStr":"20191102","type":"1"},{"dayStr":"20191103","type":"1"},{"dayStr":"20191104","type":"0"},{"dayStr":"20191105","type":"0"},{"dayStr":"20191106","type":"0"},{"dayStr":"20191107","type":"0"},{"dayStr":"20191108","type":"0"},{"dayStr":"20191109","type":"1"},{"dayStr":"20191110","type":"1"},{"dayStr":"20191111","type":"0"},{"dayStr":"20191112","type":"0"},{"dayStr":"20191113","type":"0"},{"dayStr":"20191114","type":"0"},{"dayStr":"20191115","type":"0"},{"dayStr":"20191116","type":"1"},{"dayStr":"20191117","type":"1"},{"dayStr":"20191118","type":"0"},{"dayStr":"20191119","type":"0"},{"dayStr":"20191120","type":"0"},{"dayStr":"20191121","type":"0"},{"dayStr":"20191122","type":"0"},{"dayStr":"20191123","type":"1"},{"dayStr":"20191124","type":"1"},{"dayStr":"20191125","type":"0"},{"dayStr":"20191126","type":"0"},{"dayStr":"20191127","type":"0"},{"dayStr":"20191128","type":"0"},{"dayStr":"20191129","type":"0"},{"dayStr":"20191130","type":"1"},{"dayStr":"20191201","type":"1"},{"dayStr":"20191202","type":"0"},{"dayStr":"20191203","type":"0"},{"dayStr":"20191204","type":"0"},{"dayStr":"20191205","type":"0"},{"dayStr":"20191206","type":"0"},{"dayStr":"20191207","type":"1"},{"dayStr":"20191208","type":"1"},{"dayStr":"20191209","type":"0"},{"dayStr":"20191210","type":"0"},{"dayStr":"20191211","type":"0"},{"dayStr":"20191212","type":"0"},{"dayStr":"20191213","type":"0"},{"dayStr":"20191214","type":"1"},{"dayStr":"20191215","type":"1"},{"dayStr":"20191216","type":"0"},{"dayStr":"20191217","type":"0"},{"dayStr":"20191218","type":"0"},{"dayStr":"20191219","type":"0"},{"dayStr":"20191220","type":"0"},{"dayStr":"20191221","type":"1"},{"dayStr":"20191222","type":"1"},{"dayStr":"20191223","type":"0"},{"dayStr":"20191224","type":"0"},{"dayStr":"20191225","type":"0"},{"dayStr":"20191226","type":"0"},{"dayStr":"20191227","type":"0"},{"dayStr":"20191228","type":"1"},{"dayStr":"20191229","type":"1"},{"dayStr":"20191230","type":"0"},{"dayStr":"20191231","type":"0"}]
