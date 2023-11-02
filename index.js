document.addEventListener('DOMContentLoaded', () =>{
    Highcharts.chart('container', {
        chart:{
            renderTo: 'container',
            type:'areaspline'
        },
        credits:{
            text:'My custom credit',
            href:'https://google.com',
            position:{
                align:'left',

            }
        },
        xAxis:{
            categories:['Apples', 'Bananas', 'Oranges']
        },
        yAxis:{
            title:{
                text:'numero'
            }
            
        },
        series:[{
            name: 'John',
            data: [1,2,3]
        },
        {
            name: 'Kaline',
            data: [5,7,8]
        }
        ]
        

    })
});