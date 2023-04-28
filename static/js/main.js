


function validateUser() {
    event.preventDefault(); // prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;  

    if(username !== "" && password !== "") {
        window.location.replace("../html/Home.html");
    }else {
        alert("Please enter a valid username and password.");
        return false; // prevent form submission
    }
}

    function toggleLogoutMenu() {
        var logoutMenu = document.getElementById("logoutMenu");
        if (logoutMenu.style.display === "block") {
            logoutMenu.style.display = "none";
        } else {
            logoutMenu.style.display = "block";
        }
    }

    function toggleLogoutMenu() {
        var logoutMenu = document.getElementById("logoutMenu");
        if (logoutMenu.style.display === "block") {
            logoutMenu.style.display = "none";
        } else {
            logoutMenu.style.display = "block";
        }
    }

    function logout() {
        window.location.replace("/");
    }

    function showChart_one(chartId, element) {
        const heading = document.getElementById('dashboardHeading');
        // Set a new value to the heading using innerHTML
        heading.innerHTML = chartId;
        const leftSlider = document.querySelector(".left-slider");

        for (const child of leftSlider.children) {
        child.classList.remove("selected");
        }
        if(element){
            element.classList.add("selected");
        }else {
            document.getElementById('dashboard').classList.add("selected");
        }

        const ctx = document.getElementById('myChart');

        // Remove existing chart instance
        var chart = Chart.getChart(ctx);
        if (chart) {
            chart.destroy();
        }
         // Update chart data based on selected chart ID
         var chartData;
         var chartType;
         switch (chartId) {
             case 'Dashboard':
                 // Set chart data for dashboard
                 var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                      labels: ['Study', 'Sleep', 'Workout', 'Social'],
                      datasets: [{
                        label: '# of Mins',
                        data: [120, 190, 30, 50],
                        borderWidth: 1,
                        backgroundColor: [
                          '#ff6984', // Specify color for Study
                          '#36a2c1', // Specify color for Sleep
                          '#4b9292', // Specify color for Workout
                          '#ff9940' // Specify color for Social
                        ],
                        // Add some design elements to the chart
                        barPercentage: .6,
                        barStrokeWidth: 2,
                        barRadius: 5,
                        // Add more information to the chart
                        dataLabels: {
                          enabled: true,
                          formatter: function(value, index, data) {
                            return value + ' minutes';
                          }
                        }
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
                 break;
             case 'Study Chart':
                 // Set chart data for studyChart
                 new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                      datasets: [{
                        label: '# of Mins',
                        data: [90, 70, 100, 50, 20, 0, 120],
                        borderWidth: 1,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)', 
                            'rgba(54, 162, 235, 0.6)', 
                            'rgba(75, 192, 192, 0.6)', 
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            'rgb(215, 105, 186)'
                        ]
                      }]
                    }                   
                  });
                 break;
            case 'Sleep Chart':          
                // Set chart data for studyChart
                new Chart(ctx, {
                    type: 'line',
                    data: {
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    datasets: [{
                        label: '# of Mins',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        borderWidth: 1,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)', 
                            'rgba(54, 162, 235, 0.6)', 
                            'rgba(75, 192, 192, 0.6)', 
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            'rgb(215, 105, 186)'
                        ]
                    }]
                    }                   
                });
                break;
                  
            case 'Workout Chart':
                // Set chart data for studyChart
                new Chart(ctx, {
                    type: 'polarArea',
                    data: {
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        datasets: [{
                        label: '# of Mins',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        borderWidth: 1,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)', 
                            'rgba(54, 162, 235, 0.6)', 
                            'rgba(75, 192, 192, 0.6)', 
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            'rgb(215, 105, 186)'
                        ]
                        }]
                    }                   
                    });
                break;
            case 'Social Chart':
                // Set chart data for studyChart
                new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        datasets: [{
                        label: '# of Mins',
                        data: [65, 59, 90, 81, 56, 155, 140],
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132)'
                        }]
                    }                   
                    });
                break;
            
         }    
    }

    function handleViewChange(type) {
      dashbordElement = document.getElementById("dashboard");
      dashClass = dashbordElement.classList.value;
      var chartLabels, chartdata;
      if(dashClass === 'selected') {
        chartLabels = ['Study', 'Sleep', 'Workout', 'Social'];
        chartdata = [120, 190, 30, 50];
      } else {
        chartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        chartdata = [65, 59, 90, 81, 56, 155, 140];
      }
    
      const ctx = document.getElementById('myChart');

        // Remove existing chart instance
        var chart = Chart.getChart(ctx);
        if (chart) {
            chart.destroy();
        }
         // Update chart data based on selected chart ID
         var myChart = new Chart(ctx, {
          type: type,
          data: {
            labels: chartLabels,
            datasets: [{
              label: '# of Mins',
              data: chartdata,
              borderWidth: 1,
              backgroundColor: [
                '#ff6984', // Specify color for Study
                '#36a2c1', // Specify color for Sleep
                '#4b9292', // Specify color for Workout
                '#ff9940' // Specify color for Social
              ],
              // Add some design elements to the chart
              barPercentage: .6,
              barStrokeWidth: 2,
              barRadius: 5,
              // Add more information to the chart
              dataLabels: {
                enabled: true,
                formatter: function(value, index, data) {
                  return value + ' minutes';
                }
              }
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

    function openTimeSpentForm() {
        var Exform = document.getElementById("timeSpentForm");
        if(Exform) {
            Exform.remove()
        }
        // Create the form element
        var form = document.createElement("form");
        form.id = "timeSpentForm";
        form.style.width = "300px"; // Set the width of the form
        form.style.height = "100vh"; // Set the height of the form to occupy the full height of the viewport
        form.style.position = "fixed";
        form.style.top = "0";
        form.style.right = "-300px"; // Set the initial position of the form to be hidden outside the viewport
        form.style.backgroundColor = "#62adbc"
        form.style.padding = "20px";
        form.style.transition = "right 0.3s ease-in-out"; // Add transition effect for smooth sliding animation
      
        // Add form fields
        form.innerHTML = `
        <form id="timeSpentForm" action="/add_activity" method="POST" onsubmit="showSuccessBanner('activity')">
        <h2>Add New Time Spent</h2>
        <div style="width: 50%; margin: auto;">
          <label for="activity" style="display: block; margin-bottom: 10px;">Activity:</label>
          <select id="activity" name="activity" required style="width: 100%; padding: 5px; border: 1px solid #ccc; border-radius: 5px;">
            <option value="Study">Study</option>
            <option value="Sleep">Sleep</option>
            <option value="Workout">Workout</option>
            <option value="Social">Social</option>
          </select><br><br>
          <label for="time" style="display: block; margin-bottom: 10px;">Time (in Minutes):</label>
          <input type="number" id="time" name="time" required style="width: 100%; padding: 5px; border: 1px solid #ccc; border-radius: 5px;"><br><br>
          <label for="date" style="display: block; margin-bottom: 10px;">Date:</label>
          <input type="date" id="date" name="date" required style="width: 100%; padding: 5px; border: 1px solid #ccc; border-radius: 5px;"><br><br><br>
          <div style="text-align: right;">
            <button type="submit" value="Submit" onclick="showSuccessBanner('activity')" style="padding: 10px 20px; background-color: #007bff; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Save</button>
            <button type="submit" onclick="closeTimeSpentForm()" style="padding: 10px 20px; background-color: #ccc; color: #333; border: none; border-radius: 5px; cursor: pointer;">Close</button>
          </div>
        </div>
      </form>      
        `;
      
        // Append the form to the body
        document.body.appendChild(form);
      
        // Slide the form into view
        setTimeout(function() {
          form.style.right = "0";
        }, 10);
      }
      
      function closeTimeSpentForm() {
        // Slide the form out of view
        document.getElementById("timeSpentForm").style.right = "-400px";
      }
      
      function saveTimeSpent() {

        document.getElementById("timeSpentForm").style.right = "-400px";
        
        // Perform validation and saving logic here
        
        // Close the form after saving
        closeTimeSpentForm();
      }
      

      function showSuccessBanner(id) {
        var banner = document.getElementById('success-banner');
        if(id == 'activity') {
          closeTimeSpentForm();
          banner.innerHTML = "Activity Added Succesfully";
        } else if(id == 'signup') {
          banner.innerHTML = "User added successfully! Please Login!";
        }
        banner.style.display = 'block';
        setTimeout(function() {
          banner.style.display = 'none';
        }, 3000);
      }
    