/*
 * Yii2 Touch Input Spin customizado
 * @author Armando Ricardo Nogueira - armandoricky@gmail.com 
 */

/** 
 * ACRÉSCIMO [+]
 * @param {event} e
 * **/
$(document).on('click', '.acrescimo', function (e) {
    e.preventDefault;
    var currentEntry = $(this).parents('.armrck-touchspin-entry:first');
    var input = $(currentEntry.find('.input-spin'))[0];
    if (input.value === "") {
        input.value = 0;
    }
    input.value = parseInt(input.value, 10) + 1;
});

/** 
 * DECRÉSCIMO [-]
 * @param {event} e
 **/
$(document).on('click', '.decrescimo', function (e) {
    e.preventDefault;
    var currentEntry = $(this).parents('.armrck-touchspin-entry:first');
    var input = $(currentEntry.find('.input-spin'))[0];
    if (input.value === "") {
        input.value = 0;
    }
    var decrescimo = parseInt(input.value) - 1;
    input.value = decrescimo < 1 ? 0 : decrescimo;
});

/** 
 * ALTERAR PROPRIEDADES DOS BOTÕES E/OU REMOVER ENTRADAS DE CAMPO
 * Ref: armrck-touchspin CLONE ENTRY
 * @param {event} e
 **/
$(document).on('click', '.armrck-touchspin-add', function (e) {
    e.preventDefault();

    // Posicionando no elemento pai do filho clicado
    var currentEntry = $(this).parents('.armrck-touchspin-entry:first');
    var currentDataKey = $(this).parents('.armrck-touchspin-entry:first').data('key');

    // Pegando valores dos campos filhos
    var firstInputValue = currentEntry.find('input:first').val();
    var lastInputValue = currentEntry.find('input:last').val();

    // Não permitir próximos scripts para adicionar (clonar)
    if (!firstInputValue || !lastInputValue) {
        if (typeof swal !== 'undefined' || typeof sweetAlert === "function") {
            swal({
                title: 'Opss!',
                text: 'Preencha todos os campos',
                type: 'warning',
                timer: 3000,
                useRejections: false
            });
        } else {
            alert('Preencha todos os campos');
        }
        return false;
    }

    var armTouchspinList = $('.armrck-touchspin-list');
    var newEntry = $(currentEntry.clone().attr('data-key', currentDataKey + 1)).appendTo('.armrck-touchspin-list');

    // Alterar attributo "name" de cada campo da nova entrada
    var firstInputName = newEntry.find('input:first').attr('name');
    var lastInputName = newEntry.find('input:last').attr('name');

    newEntry.find('input:first').attr('name', firstInputName.replace(/\d+/, currentDataKey + 1));
    newEntry.find('input:last').attr('name', lastInputName.replace(/\d+/, currentDataKey + 1));

    // Campos em branco
    newEntry.find('input').val('').attr('tabindex', currentDataKey + 1);

    // Desabilitar o primeiro botao 
    armTouchspinList.find('.armrck-touchspin-entry:first .armrck-touchspin-add')
            .removeClass('armrck-touchspin-add')
            .removeClass('btn-success').addClass('btn-default').prop('disabled', true);

    // Inverter os botoes de adicionar campo para remover campo da lista
    armTouchspinList.find('.armrck-touchspin-entry:not(:last) .armrck-touchspin-add')
            .removeClass('armrck-touchspin-add').addClass('armrck-touchspin-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<i class="fa fa-minus" aria-hidden="true"></i> Campo');

    // Posicionar cursor dentro do primeiro novo campo
    newEntry.find('input:first').focus();
}).on('click', '.armrck-touchspin-remove', function (e) {
    // Remover item
    $(this).parents('.armrck-touchspin-entry:first').remove();
    e.preventDefault();
    return false;
});


$(document).on('click', '.stats-info', function () {
    $(this).parents('.card-stats').find('.card-stats-info').animate({
        height: 'toggle'
    }, 290, function () {
    });
});


var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var randomScalingFactor = function() {
            return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
        };
        var randomColorFactor = function() {
            return Math.round(Math.random() * 255);
        };
        var randomColor = function() {
            return "rgba(" + randomColorFactor() + "," + randomColorFactor() + "," + randomColorFactor() + ",.7)";
        };

        var barChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Dataset 1",
                backgroundColor: "rgba(220,220,220,0.5)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }, {
                hidden: true,
                label: "Dataset 2",
                backgroundColor: "rgba(151,187,205,0.5)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }, {
                label: "Dataset 3",
                backgroundColor: "rgba(151,187,205,0.5)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }]

        };

        window.onload = function() {
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myBar = new Chart(ctx, {
                type: "bar",
                data: barChartData,
                options: {
                    // Elements options apply to all of the options unless overridden in a dataset
                    // In this case, we are setting the border of each bar to be 2px wide and green
                    elements: {
                        rectangle: {
                            borderWidth: 2,
                            borderColor: "rgb(0, 255, 0)",
                            borderSkipped: "bottom"
                        }
                    },
                    responsive: true,
                    legend: {
                        position: "top",
                    },
                    title: {
                        display: true,
                        text: "Chart.js Bar Chart"
                    }
                }
            });

        };

        $("#randomizeData").click(function() {
            var zero = Math.random() < 0.2 ? true : false;
            $.each(barChartData.datasets, function(i, dataset) {
                dataset.backgroundColor = randomColor();
                dataset.data = dataset.data.map(function() {
                    return zero ? 0.0 : randomScalingFactor();
                });

            });
            window.myBar.update();
        });

        $("#addDataset").click(function() {
            var newDataset = {
                label: "Dataset " + barChartData.datasets.length,
                backgroundColor: randomColor(),
                data: []
            };

            for (var index = 0; index < barChartData.labels.length; ++index) {
                newDataset.data.push(randomScalingFactor());
            }

            barChartData.datasets.push(newDataset);
            window.myBar.update();
        });

        $("#addData").click(function() {
            if (barChartData.datasets.length > 0) {
                var month = MONTHS[barChartData.labels.length % MONTHS.length];
                barChartData.labels.push(month);

                for (var index = 0; index < barChartData.datasets.length; ++index) {
                    //window.myBar.addData(randomScalingFactor(), index);
                    barChartData.datasets[index].data.push(randomScalingFactor());
                }

                window.myBar.update();
            }
        });

        $("#removeDataset").click(function() {
            barChartData.datasets.splice(0, 1);
            window.myBar.update();
        });

        $("#removeData").click(function() {
            barChartData.labels.splice(-1, 1); // remove the label first

            barChartData.datasets.forEach(function(dataset, datasetIndex) {
                dataset.data.pop();
            });

            window.myBar.update();
        });