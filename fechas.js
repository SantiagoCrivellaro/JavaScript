var fecha = new Date();

document.write(fecha + "<br/>");
document.write(fecha.toDateString() + "<br/>");
// ut hora universal
document.write(fecha.toUTCString() + "<br/>");
document.write("dia:" + fecha.getDate() + "<br/>")
document.write("mes:" + (fecha.getMonth() + 1) + "<br/>")
document.write("año:" + fecha.getFullYear() + "<br/>")
d