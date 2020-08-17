<template>
    <div class="relationChart">
        <!-- 内容 -->
        <div id="map" class="map" ref="map" style="width: 1000px;height: 800px;border: 1px solid red;">
        </div>
    </div>
</template>
<script>
    
    import RelationChart from 'relation-chart'
    //统一入口
    export default {
        name:'relationChart',
        components:{
            RelationChart,
        },
        data(){
            return {
                data: {
                    // 节点列表
                    nodes:[
                        {
                            "name": "路人甲",
                            "role_id": 41,
                            "group": 1,
                            "avatar": "./img/141611471224.jpg"
                        },
                        {
                            "name": "路人乙",
                            "role_id": 42,
                            "group": 1,
                            "avatar": "./img/141611471224.jpg"
                        },
                        {
                            "name": "路人丙",
                            "role_id": 43,
                            "group": 1,
                            "avatar": "./img/140848800133.jpg"
                        },
                    ],
                    // 线条列表
                    links:[
                        {
                            "source": 0,            // 起始节点在 nodes[] 中的索引
                            "target": 1,            // 目标节点在 nodes[] 中的索引
                            "relation": "朋友",      // 关系名称
                            "color": "734646"       // 自定义细条颜色,#734646
                        },
                        {
                            "source": 1,
                            "target": 2,
                            "relation": "女朋友",
                            "color": "734646"
                        },
                    ],
                },
                

                defaultConfig: {
                    // width: 1000,                 // 总画布svg的宽,单位为px,默认为容器的宽
                    // height: 500,                // 高，默认为容器的高
                    isHighLight: true,        // 是否启动 鼠标 hover 到节点上高亮与节点有关的节点，其他无关节点透明的功能
                    isScale: true,              // 是否启用缩放平移zoom功能
                    scaleExtent: [0.5, 1.5],    // 缩放的比例尺
                    chargeStrength: -300,        // 万有引力
                    collide: 100,                 // 碰撞力的大小 （节点之间的间距）
                    nodeWidth: 160,             // 每个node节点所占的宽度，正方形
                    margin: 20,                 // node节点距离父亲div的margin
                    alphaDecay: 0.0228,          // 控制力学模拟衰减率
                    r: 45,                      // 头像的半径 [30 - 45]
                    relFontSize: 12,           // 关系文字字体大小
                    linkSrc: 30,                // 划线时候的弧度
                    linkColor: '#bad4ed',        // 链接线默认的颜色
                    strokeColor: '#7ecef4',     // 头像外围包裹的颜色
                    strokeWidth: 3,             // 头像外围包裹的宽度
                },
            }
        },
        props:{},
        computed:{
           
        },
        methods:{
            init() {
                new RelationChart(this.$refs.map, this.data,this.defaultConfig)
            },
            
        },
        watch:{
            
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
