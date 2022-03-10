var currentSite = window.location.hostname;
2 var currentPath = window.location.pathname;
3 var destination = "http://" + currentSite + currentPath + "#humidifier";
4 window.location.href = destination;