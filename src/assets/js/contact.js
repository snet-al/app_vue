
$net.ready(function () {

  $vm = $net.view.vue({
    stype: "#contact-tpl",
    data: "",
    scope: {
      lists: [{ label: "Kontakt", url: "" },
      { label: "Personeli", url: "" },
      { label: "Dyqanet", url: "" },
      { label: "Harta", url: "" },
      { label: "History", url: "" },
      { label: "FAQ", url: "" }]
    },
    renderTo: "#contact-categories"
  });

  $vm = $net.view.vue({
    stype: "#header-tpl",
    renderTo: "#user-header"
  });

  $vm = $net.view.vue({
    stype: "#search-header-tpl",
    renderTo: "#search-header"
  });

});