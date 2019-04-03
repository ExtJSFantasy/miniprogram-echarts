import * as echarts from './../../ec-canvas/echarts';



function initChart(canvas, width, height) {
    console.log(`--------${width}---------${height}`);
    let chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            // 改变图标大小
            itemHeight: 9,
            data: [{
                name: '标准水平',
                icon:'bar',
                textStyle:{
                    fontSize: 12,
                    color: 'rgb(205, 148, 15)'
                }
            }, {
                name: '宝宝情况',
                icon:'bar',
                textStyle:{
                    fontSize: 12,
					color: 'rgb(225, 212, 168)'
                }
            }],
            left: 'right',
            // 控制legend位置 上右下左
            padding: [0, 20, 0, 0],
            // 控制距离顶部的位置
            top: 30,
            z: 100
        },
        grid: {
            left: '3%',
            right: '15%',
            bottom: '50%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            name: '日期',
            nameLocation: 'end',
             // 控制x轴线盖住 柱底
             z: 1000,
            // offset: 10,
            // position: 'bottom',
            //刻度标签文字的颜色
            nameTextStyle: {
                color: '#000000',
                // 改变文字的位置
                padding: [20, -30, -10, -15]
            },
            //刻度标签文字的颜色
            axisLabel: {
                color: '#000000',
                //margin: 1,
            },
            data: ['1.08', '1.09', '1.10', '1.11', '1.12', '1.13', '1.14'],
            axisLine: {
                // 坐标带箭头
                symbol: ['none', 'path://M250 150 L150 350 L350 350 Z'],
                symbolSize: [15, 25],
                symbolOffset: [0, 6],
                // 坐标轴颜色
                lineStyle: {
                    color: 'rgb(209,174,74)',
                    width: 3
                }
            },
            // 去掉轴的短的分段线
            axisTick: {
                show: false
            }

        },
        yAxis: {
            type: 'value',
            name: '喂奶量/ml',
            nameLocation: 'end',
            // splitNumber: 0.2,
            //  是否显示 0
            // scale: true,
            //刻度标签文字的颜色
            nameTextStyle: {
                color: '#000000',
                align: 'center',
                fontSize: 12,
                // 改变文字的位置
                padding: [-10, -70, -30, 10]
            },
            axisLabel: {
                color: '#000000',
                formatter: function (value) {
                    var texts = [];
                    if (value <= 0) {
                        texts.push('');
                    }else  {
                        texts.push(value);
                    }
                    return texts;

                }
            },
            axisLine: {
                symbol: ['none', 'path://M250 150 L150 350 L350 350 Z'],
                symbolSize: [15, 60],
                symbolOffset: [0, 4],
                lineStyle: {
                    color: 'rgb(209,174,74)',
                    width: 3
                }
            },
            // 控制刻度线
            axisTick: {
                show: true,      // 是否显示刻度
                inside: true,    // 坐标轴刻度是否朝内，默认朝外。
                interval: 2,
                lineStyle: {
                    width: 3, //坐标轴刻度线厚度。
                    color: 'rgb(216, 214, 202)'   //坐标线的颜色
                }
            },
            // 去掉y轴的网格线
            splitLine: {
                show: false
            }
        },
        series: [{
            name: '宝宝情况',
            data: [300, 400, 500, 600, 680, 567, 678],
            type: 'bar',
            // 柱子的宽度
            // barWidth: '30%',
            barCategoryGap: "55%",
            label: {
            },
            // 柱的样式
            itemStyle: {
                normal: {
                    color: 'rgb(223,212,173)',
                    label: {
                        show: true,		//开启显示
                        position: 'top',	//在上方显示
                        textStyle: {	    //数值样式
                            color: 'black',
                            fontSize: 16
                        }
                    }
                }
            }
        },
        {
            type: 'line',
            name: '标准水平',
            data: [567, 578, 567, 589, 567, 567, 567],
            smooth: true,
            lineStyle: {
                color: 'rgb(205, 148, 19)'
            },
            itemStyle: {
                color: 'rgb(205, 148, 19)',
                opacity: 'rgb(205, 148, 19)'
            }

        }]
    };

    chart.setOption(option);
    return chart;
}

Page({
    data: {
        ec: {

        }
    },
    echartInit(e) {
        initChart(e.detail.canvas, e.detail.width, e.detail.height);
    },
    onLoad() {
    },
    onReady() {
    }
});
