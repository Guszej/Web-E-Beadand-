const table = document.getElementById('data-table');
        const ctx = document.getElementById('myChart').getContext('2d');
        let chart;

        table.addEventListener('click', function(event) {
            const target = event.target;
            if (target.tagName === 'TD') {
                const row = target.parentElement;
                const data = Array.from(row.children).map(cell => Number(cell.textContent));
                updateChart(data);
            }
        });

        function updateChart(data) {
            if (chart) {
                chart.destroy();
            }
            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Selected Row Data',
                        data: data,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                        fill: false
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }