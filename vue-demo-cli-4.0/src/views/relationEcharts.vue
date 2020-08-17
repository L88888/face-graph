<template>
    <div class="relationChart">
        <!-- 内容 -->
        <template>
            <div class="echartLayout">
                <div id="container" style="width:100%; height:100%; overflow:hidden;"></div>
            </div>
        </template>
       
    </div>
</template>
<script>
    
    // 页面模块
    import echarts from 'echarts'
    //统一入口
    export default {
        name:'relationChart',
        components:{
        },
        data(){
            return {
                myChart: null,
                chartData:[
                    {
                        name: '张1',
                        symbolSize: 176,
                        id: '1',
                        url:'https://i.loli.net/2019/03/29/5c9e005315d58.jpg',
                    },
                    {
                        name: '张2',
                        id: '2',
                        url:'https://i.loli.net/2019/03/29/5c9e005315d58.jpg',
                    },
                    {
                        name: '张3',
                        id: '3',
                        url:'https://i.loli.net/2018/12/11/5c0f26233b7c9.jpeg',
                    },
                    {
                        name: '张4',
                        id: '4',
                        url:'https://i.loli.net/2019/03/29/5c9e005315d58.jpg',
                    },
                    {
                        name: '张5',
                        id: '5',
                        url:'https://i.loli.net/2018/12/11/5c0f5d927472d.jpeg',
                    },
                    {
                        name: '张6',
                        id: '6',
                        url:'https://i.loli.net/2019/03/29/5c9e005315d58.jpg',

                    },
                    {
                        name: '张7',
                        id: '7',
                        url:'https://i.loli.net/2019/03/29/5c9e005315d58.jpg',
                    },
                    {
                        name: '张8',
                        id: '8',
                        url:'http://172.20.32.230:2089/faceAlarmImages/2020/08/12/53ad12592ca4460dab8fee0cef2d13f6.jpg',
                    },
                ],  //数据集合
                // chartData:[
                //     {
                //         name: '张1',
                //         symbolSize: 176,
                //         id: '1',
                //     },
                //     {
                //         name: '张2',
                //         id: '2',
                //     },
                //     {
                //         name: '张3',
                //         id: '3',
                //     },
                //     {
                //         name: '张4',
                //         id: '4',
                //     },
                //     {
                //         name: '张5',
                //         id: '5',
                //     },
                //     {
                //         name: '张6',
                //         id: '6',
                //     },
                //     {
                //         name: '张7',
                //         id: '7',
                //     },
                //     {
                //         name: '张8',
                //         id: '8',
                //     },
                // ],  //数据集合
                chartLink:[
                    {value: "同事",source: "1",target: "2"},
                    {value: "同事",source: "1",target: "3"},
                    {value: "同事",source: "1",target: "4"},
                    {value: "同学",source: "1",target: "5"},
                    {value: "同学",source: "1",target: "6"},
                    {value: "同学",source: "1",target: "7"},
                    {value: "爸爸",source: "1",target: "8"},
                ], //关系数据集合
            }
        },
        props:{},
        computed:{
            
        },
        methods:{
            //绘制echarts图谱
            initEchart() {
                let that=this;
                let dom = document.getElementById("container");
                this.myChart = echarts.init(dom);
                                   
                                    let option = {
                                        title: {
                                            text: '知识图谱',
                                        },
                                        tooltip:{
                                            show:true
                                        },
                                        animationDurationUpdate: 1500,
                                        animationEasingUpdate: 'quinticInOut',
                                        series: [{
                                            type: 'graph',
                                            layout: 'force',
                                            cursor:'pointer',
                                            symbolSize: 80,  //单个实例圆大小
                                            draggable: true,  //单个实例拖动
                                            label:{
                                                normal:{
                                                    show:true,
                                                    formatter:function(params){ //标签内容
                                                        return  params.name
                                                    },
                                                    // color:['#000'],
                                                    // textStyle: {
                                                    //     fontSize: 14
                                                    // },
                                                    // position:'bottom',
                                                }
                                            },   //单个实例字体显示
                                            // symbol: `image://${imgSrc}`,  //单个实例头像图片展示    不同实例不同图片，写数据里面用symbol

                                            roam: true,
                                            focusNodeAdjacency: true,  //焦点不相邻
                                            edgeSymbol: ['arrow', 'arrow'],   //箭头  边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。默认不显示标记，常见的可以设置为箭头，
                                            edgeSymbolSize: [10, 10],   //箭头大小
                                            edgeLabel: {
                                                normal: {
                                                    show: true,
                                                    textStyle: {
                                                        fontSize: 15,
                                                        color:'#667aed'
                                                    },
                                                    formatter:"{c}",
                                                }
                                            },   //连线关系，字体颜色设置
                                            force: {
                                                repulsion: 2000,
                                                edgeLength: 120
                                            },  //线长度的属性
                                            //数据展示
                                            links: this.chartLink, //关系数据集合
                                            data:this.chartData, //数据集合

                                            lineStyle: {
                                                color:'blue',
                                                opacity: 0.9,
                                                width: 2,
                                                curveness: 0,
                                            },
                                            itemStyle:{
                                                normal:{
                                                    color: ['#6495ED']
                                                },
                                                //鼠标放上去有阴影效果
                                                emphasis: {
                                                    shadowColor: '#3721db',
                                                    shadowOffsetX: 0,
                                                    shadowOffsetY: 0,
                                                    shadowBlur: 40,
                                                },
                                            },
                                           
                                        }]
                                    };

                this.myChart.setOption(option);
                this.myChart.on('click', function (params) {
                    console.log(params.data)//获取点击的头像的数据信息
                    console.log(11111)//获取点击的头像的数据信息
                        
                    let data1= { name: '张9', id: '9',url:'https://i.loli.net/2019/03/29/5c9e005315d58.jpg' };
                    that.chartData.push(data1);
                    let Link1= {value: "同事",source: "1",target: "9"};
                    that.chartLink.push(Link1);
                });
            },
            //定义抠图方法
            getImgData(imgSrc) {
                return new Promise((resolve) => {
                    const canvas = document.createElement('canvas');
                    const contex = canvas.getContext('2d');
                    const img = new Image();
                    img.crossOrigin = '';
                    img.onload = function() {

                        let imgWith = img.width;
                        let imgHeight = img.height;

                        let radius =Math.floor(Math.min(imgWith,imgHeight) / 2);

                        let diameter = radius * 2;
                        
                        let center={
                            x: Math.floor(imgWith / 2),
                            y: Math.floor(imgHeight / 2)
                        }

                        canvas.width = diameter;
                        canvas.height = diameter;
                        contex.clearRect(0, 0, diameter, diameter);
                        contex.save();
                        contex.beginPath();
                        contex.arc(radius, radius, radius, 0, 2 * Math.PI); //画出圆
                        contex.clip(); //裁剪上面的圆形
                        contex.drawImage(img, center.x - radius, center.y - radius, diameter, diameter, 0, 0, diameter, diameter); // 在刚刚裁剪的园上画图
                        contex.restore(); // 还原状态
                        resolve(canvas.toDataURL('image/png', 1))
                    }
                    img.src = imgSrc;
                })
            },
            //带图的init
            init(){
                Promise.all(this.chartData.map(item => {
                    return this.getImgData(item.url)
                })).then(res => {
                    let j = 0;
                    do {
                        this.chartData[j].symbol = `image://${res[j]}`;
                        j++;
                    } while (j < this.chartData.length)
                    this.initEchart()
                });
            },
         
        },
        watch:{
            chartData(){
                // this.init();
                this.initEchart();
            }
        },
        //DOM未加载
        created(){
        },
        //DOM已加载
        mounted(){
           this.init();
        },
        beforeDestroy(){
        
        },
        
    }
</script>
<style lang="less" scoped>
.relationChart{
    background: #ffffff;
    width: 100%;
    min-height: 100%;
    padding: 10px;
    .echartLayout {
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .loading-img{
        text-align:center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(255,255,255,0.5);
        z-index: 9999;
        img{
            top: 50%;
            left:50%;
            position:inherit;
            transform: translate(-50%,-50%);
            width:260px;
            height:260px;
        }
    }

}

</style>
<style lang="less">
.relationChart{
    
}
</style>
