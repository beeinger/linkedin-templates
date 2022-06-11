const getSVG = () => {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("id", "icons");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 64 64");
  svg.setAttribute("class", "linkedin-chat-svg");

  let svg_child = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "title"
  );
  svg_child.textContent = "icon_15";
  svg.appendChild(svg_child);

  svg_child = document.createElementNS("http://www.w3.org/2000/svg", "line");
  svg_child.setAttribute("class", "linkedin-chat-svg-child");
  svg_child.setAttribute("x1", "26.24");
  svg_child.setAttribute("y1", "24");
  svg_child.setAttribute("x2", "43.76");
  svg_child.setAttribute("y2", "24");
  svg.appendChild(svg_child);

  svg_child = document.createElementNS("http://www.w3.org/2000/svg", "line");
  svg_child.setAttribute("class", "linkedin-chat-svg-child");
  svg_child.setAttribute("x1", "31.41");
  svg_child.setAttribute("y1", "32");
  svg_child.setAttribute("x2", "43.76");
  svg_child.setAttribute("y2", "32");
  svg.appendChild(svg_child);

  svg_child = document.createElementNS("http://www.w3.org/2000/svg", "path");
  svg_child.setAttribute("class", "linkedin-chat-svg-child");
  svg_child.setAttribute(
    "d",
    "M43.85,44.65A18.63,18.63,0,0,1,19,51.08l-8.19,3A.93.93,0,0,1,9.67,52.8l3.08-7.39a18.64,18.64,0,0,1,5.43-26.48"
  );
  svg.appendChild(svg_child);

  svg_child = document.createElementNS("http://www.w3.org/2000/svg", "path");
  svg_child.setAttribute("class", "linkedin-chat-svg-child");
  svg_child.setAttribute(
    "d",
    "M50.64,39.09a19.25,19.25,0,1,0-6.74,5.53l8.29,3.43a1,1,0,0,0,1.27-1.22Z"
  );
  svg.appendChild(svg_child);

  return svg;
};
