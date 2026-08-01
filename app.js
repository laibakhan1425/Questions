var studentName = prompt("Enter Student Name:");
var className = prompt("Enter Class:");

var totalMarksPerSubject = 100;


var eng = parseInt(prompt("Enter marks for English (out of 100):"));
var urdu = parseInt(prompt("Enter marks for Urdu (out of 100):"));
var math = parseInt(prompt("Enter marks for Math (out of 100):"));
var phy = parseInt(prompt("Enter marks for Physics (out of 100):"));
var pst = parseInt(prompt("Enter marks for PST (out of 100):"));
var isl = parseInt(prompt("Enter marks for Islamiat (out of 100):"));


if (eng > 100 || urdu > 100 || math > 100 || phy > 100 || pst > 100 || isl > 100) {
    document.write("<h2>Error: Marks cannot be greater than 100</h2>");
} else {

    var totalObtained = eng + urdu + math + phy + pst + isl;
    var totalMarks = 600;

    
    document.write("<h2>Marksheet</h2>");
    document.write("<p><strong>Name:</strong> " + studentName + "</p>");
    document.write("<p><strong>Class:</strong> " + className + "</p>");

    document.write("<table border='1' cellpadding='10'>");
    document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");

    document.write("<tr><td>English</td><td>" + eng + "</td><td>100</td></tr>");
    document.write("<tr><td>Urdu</td><td>" + urdu + "</td><td>100</td></tr>");
    document.write("<tr><td>Math</td><td>" + math + "</td><td>100</td></tr>");
    document.write("<tr><td>Physics</td><td>" + phy + "</td><td>100</td></tr>");
    document.write("<tr><td>PST</td><td>" + pst + "</td><td>100</td></tr>");
    document.write("<tr><td>Islamiat</td><td>" + isl + "</td><td>100</td></tr>");

    document.write("</table>");

    document.write("<h3>Total Obtained: " + totalObtained + " / " + totalMarks + "</h3>");

    
    var percentage = (totalObtained / totalMarks) * 100;

    if (percentage >= 80) {
        document.write("<h3>Grade: A+</h3>");
    } else if (percentage >= 70) {
        document.write("<h3>Grade: A</h3>");
    } else if (percentage >= 60) {
        document.write("<h3>Grade: B</h3>");
    } else if (percentage >= 50) {
        document.write("<h3>Grade: C</h3>");
    } else {
        document.write("<h3>Grade: Fail</h3>");
    }
}