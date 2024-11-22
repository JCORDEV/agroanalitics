(() => {
  'use strict'

  const ctx1 = document.getElementById('harvestVsSowingChart');
  const harvestVsSowingChart = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Maíz', 'Tomate', 'Arroz'],
      datasets: [{
        label: 'Siembra (kg)',
        data: [500, 300, 400],
        backgroundColor: '#17a2b8',
        borderColor: '#17a2b8',
        borderWidth: 1
      }, {
        label: 'Cosecha (kg)',
        data: [450, 250, 380],
        backgroundColor: '#28a745',
        borderColor: '#28a745',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: true
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  });

  const ctx2 = document.getElementById('productDemandChart');
  const productDemandChart = new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ['Tomate', 'Arroz', 'Maíz'],
      datasets: [{
        label: 'Demanda Regional',
        data: [55, 30, 15],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffcd56']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          boxPadding: 3
        }
      }
    }
  });

  const ctx3 = document.getElementById('productivityChart');
  const productivityChart = new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ['Norte', 'Centro', 'Sur', 'Este', 'Oeste'],
      datasets: [{
        label: 'Productividad (kg/ha)',
        data: [2000, 1800, 2200, 2400, 1900],
        lineTension: 0.3,
        backgroundColor: 'transparent',
        borderColor: '#ffc107',
        borderWidth: 3,
        pointBackgroundColor: '#ffc107'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  });
  
  const harvestAlerts = [
    { crop: 'Maíz', date: '2024-11-15', alert: 'Cosecha de Maíz - Urgente' },
    { crop: 'Tomate', date: '2024-11-20', alert: 'Cosecha de Tomate - Oportuna' },
    { crop: 'Arroz', date: '2024-11-25', alert: 'Cosecha de Arroz - Pronto' }
  ];

  // Mostrar las alertas de cosecha
  const alertContainer = document.getElementById('harvestAlerts');
  harvestAlerts.forEach(alert => {
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-info');
    alertElement.textContent = `${alert.alert} - Fecha: ${alert.date}`;
    alertContainer.appendChild(alertElement);
  });

})();
