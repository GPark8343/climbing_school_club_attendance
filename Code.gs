function doGet() {
return HtmlService.createHtmlOutputFromFile('Index');
}
function getLoc(formData) {
  var spreadsheetId = "1mlKJq_bdG4exwkEj60JGblagoIJCrqrAyJ5AOKTUiKw";
var ss = SpreadsheetApp.openById(spreadsheetId);
//spreadsheet 아이디에 맞게 string 수정해줘야 함
var respSheet = ss.getSheets()[0] ;
var data = respSheet.getDataRange().getValues() ;
var headers = data[0] ;
var numColumns = headers.length ;
var numResponses = data.length;
var value = formData.location;
var c=value[0];
var d=value[1];
var e=c + "," + d ;


  var name = formData.name;
  var studentID = formData.studentID;
  var department = formData.department;
  var ipAddress = formData.ipAddress;
  // 위치 정보
  var latitude = formData.location[0];
  var longitude = formData.location[1];
  var geoCode = latitude + "," + longitude;
  
  // Google Maps Geocoder를 사용하여 주소 가져오기
  var response = Maps.newGeocoder().reverseGeocode(latitude, longitude);
  var address = response.results[0].formatted_address;
  
  
  respSheet.getRange(numResponses + 1, 1).setValue(name);
  respSheet.getRange(numResponses + 1, 2).setValue(studentID);
  respSheet.getRange(numResponses + 1, 3).setValue(department);
  respSheet.getRange(numResponses + 1, 4).setValue(Utilities.formatDate(new Date(), "GMT+9", "MM/dd/yyyy HH:mm:ss"));
  respSheet.getRange(numResponses + 1, 5).setValue(geoCode);
  respSheet.getRange(numResponses + 1, 6).setValue(address);
  respSheet.getRange(numResponses + 1, 7).setValue(ipAddress);
  
}