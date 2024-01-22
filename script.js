document.addEventListener("DOMContentLoaded", function () {
  //////
  var burg_menu = document.querySelector(".nav_list_mobile");
  var burg_menu_close = document.querySelector(".burger_menu_up_exit");
  var burg_menu_open = document.querySelector(".burger_menu");
  burg_menu.addEventListener("click", function () {
    burg_menu_open.classList.add("burg_open");
  });
  burg_menu_close.addEventListener("click", function () {
    burg_menu_open.classList.remove("burg_open");
  });
  ///
  var nav1 = document.querySelector(".i_about");
  var nav2 = document.querySelector(".i_vector");
  var nav3 = document.querySelector(".i_edu");
  var nav4 = document.querySelector(".i_trav");
  var nav5 = document.querySelector(".i_comanda");
  var nav6 = document.querySelector(".i_info");

  nav1.addEventListener("click", function () {
    window.scrollTo({
      top: 1100,
      behavior: "smooth",
    });
    burg_menu_open.classList.remove("burg_open");
  });
  nav2.addEventListener("click", function () {
    window.scrollTo({
      top: 2350,
      behavior: "smooth",
    });
    burg_menu_open.classList.remove("burg_open");
  });
  nav3.addEventListener("click", function () {
    window.scrollTo({
      top: 3650,
      behavior: "smooth",
    });
    burg_menu_open.classList.remove("burg_open");
  });
  nav4.addEventListener("click", function () {
    window.scrollTo({
      top: 4950,
      behavior: "smooth",
    });
    burg_menu_open.classList.remove("burg_open");
  });
  nav5.addEventListener("click", function () {
    window.scrollTo({
      top: 6560,
      behavior: "smooth",
    });
    burg_menu_open.classList.remove("burg_open");
  });
  nav6.addEventListener("click", function () {
    window.scrollTo({
      top: 7850,
      behavior: "smooth",
    });
    burg_menu_open.classList.remove("burg_open");
  });
  /////
  var exit = document.querySelector(".wrap_body_exit");
  var form = document.querySelector(".wrap");
  var but1 = document.querySelector(".one_left_button");
  var but2 = document.querySelector(".three_button");

  exit.addEventListener("click", function () {
    form.classList.toggle("hide");
  });
  but1.addEventListener("click", function () {
    form.classList.toggle("hide");
  });
  but2.addEventListener("click", function () {
    form.classList.toggle("hide");
  });

  ////
  var but_left = document.querySelector(".arrow_left");
  var but_right = document.querySelector(".arrow_right");

  var massiv_name = [
    "Ольга Березовська",
    "Михайло Кропічко",
    "Світлана Допінько",
  ];
  var massiv_micto = [
    "приватний нотаріус м.Кропивницький",
    "врач окуліст м.Кропівницький",
    "IT-спеціаліст м.Київ",
  ];
  var massiv_opic = [
    "Високий рівень викладання – викладачі прекрасні, професіонали своєї справи. Звернулися до Ольги до Жирафа Клаба за рекомендацією. Хочу особливо відзначити організованість, дисципліну, чіткість, гарний та зручний дизайн офісу. Враження лише позитивні, чудові, результат навчання – міжнародний сертифікат у дочки. Рекомендую.",
    "Високий рівень викладання та дбайливість викладачів – ось, що робить Жираф Клаб неперевершеним. Ми обрали цей навчальний заклад за рекомендацією Ольги і залишилися вражені. Чіткість, дизайн офісу та організованість - усе на високому рівні. Наша дитина отримала міжнародний сертифікат, і ми щиро рекомендуємо Жираф Клаб для ефективного та якісного навчання.",
    "Жираф Клаб - це високий стандарт навчання! Вражаюча організованість, чіткість та доброзичливі викладачі. Рекомендація Ольги була вірною – ми залишилися задоволені. Дизайн офісу вражає зручністю, а результат – міжнародний сертифікат. Вдячні та рекомендуємо!",
  ];

  var mistoM = document.querySelector(".com_misto");
  var nameM = document.querySelector(".com_name");
  var opicM = document.querySelector(".com_opic");
  var mistoM2 = document.querySelector(".com_misto2");
  var nameM2 = document.querySelector(".com_name2");
  var opicM2 = document.querySelector(".com_opic2");
  var opic_i = 0;

  but_left.addEventListener("click", function () {
    nameM.classList.add("is_out");
    mistoM.classList.add("is_out");
    opicM.classList.add("is_out");
    nameM2.classList.add("is_out");
    mistoM2.classList.add("is_out");
    opicM2.classList.add("is_out");
    setTimeout(function () {
      opic_i === 0 ? (opic_i = 2) : --opic_i;
      nameM.innerHTML = massiv_name[opic_i];
      mistoM.innerHTML = massiv_micto[opic_i];
      opicM.innerHTML = massiv_opic[opic_i];
      nameM.classList.remove("is_out");
      mistoM.classList.remove("is_out");
      opicM.classList.remove("is_out");
      nameM2.innerHTML = massiv_name[opic_i];
      mistoM2.innerHTML = massiv_micto[opic_i];
      opicM2.innerHTML = massiv_opic[opic_i];
      nameM2.classList.remove("is_out");
      mistoM2.classList.remove("is_out");
      opicM2.classList.remove("is_out");
    }, 505);
  });
  but_right.addEventListener("click", function () {
    nameM.classList.add("is_in");
    mistoM.classList.add("is_in");
    opicM.classList.add("is_in");
    nameM2.classList.add("is_in");
    mistoM2.classList.add("is_in");
    opicM2.classList.add("is_in");
    setTimeout(function () {
      opic_i === 2 ? (opic_i = 0) : ++opic_i;
      nameM.innerHTML = massiv_name[opic_i];
      mistoM.innerHTML = massiv_micto[opic_i];
      opicM.innerHTML = massiv_opic[opic_i];
      nameM.classList.remove("is_in");
      mistoM.classList.remove("is_in");
      opicM.classList.remove("is_in");
      nameM2.innerHTML = massiv_name[opic_i];
      mistoM2.innerHTML = massiv_micto[opic_i];
      opicM2.innerHTML = massiv_opic[opic_i];
      nameM2.classList.remove("is_in");
      mistoM2.classList.remove("is_in");
      opicM2.classList.remove("is_in");
    }, 505);
  });
});
