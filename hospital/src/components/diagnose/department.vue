<template>
    <div>
        <div class="title">
            选择科室医生
        </div>
        <div class="select">
            <div class="select-one"  v-for="(item,i) in Departments" :key="i" @click="handle(item)">{{ item.name }}</div>
        </div>
        <div class="final_department">
            <div class="full" v-show="childern.length>0">
                <div class="full-one" v-for="(item,i) in childern" :key="i" @click="select(item.name)">{{ item.name }}</div>
            </div>
            <div class="empty" v-show="childern.length === 0">
                <img src="../../assets/images/noCommon.png" alt=""/>
                <p>尚未选择任何科室</p>
                
            </div>
            <div class="final-department" v-show="department != null">
                您选择的科室为: {{department}}
            </div>
            <el-button @click="next">下一步</el-button>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                childern:[],
                Departments:[
                    {
                        name: '内科',
                        router: 'internal_department',
                        childern:[
                            {
                                name: '呼吸内科'
                            },
                            {
                                name: '消化内科'
                            },
                            {
                                name: '神经内科'
                            },
                            {
                                name: '心血管内科'
                            },
                            {
                                name: '肾内科'
                            }
                        ]
                    },
                    {
                        name: '外科',
                        router: 'surgery_department',
                        childern:[
                            {
                                name: '普通外科',

                            },
                            {
                                name: '神经外科'
                            },
                            {
                                name: '心胸外科'
                            },
                            {
                                name: '泌尿外科'
                            },
                            {
                                name: '心血管外科'
                            },
                            {
                                name: '肝胆外科'
                            },
                            {
                                name: '乳腺外科'
                            },
                            {
                                name: '骨外科'
                            },
                            {
                                name: '肿瘤外科'
                            }
                        ]
                    },
                    {
                        name: '儿科',
                        router: 'pediatric_departmernt',
                        childern:[
                            {
                                name: '儿科综合'
                            },
                            {
                                name: '小儿内科'
                            },
                            {
                                name: '小儿外科'
                            },
                            {
                                name: '新生儿科'
                            },
                            {
                                name: '儿童营养保健科'
                            },
                            {
                                name: '五官科'
                            }
                        ]
                    },
                    {
                        name: '肿瘤科',
                        router: 'oncology_department',
                        childern: [
                            {
                                name: '肿瘤内科'
                            },
                            {
                                name: '肿瘤外科'
                            },
                            {
                                name: '肿瘤妇科'
                            },
                            {
                                name: '骨肿瘤科'
                            },
                            {
                                name: '放疗科'
                            },
                            {
                                name: '肿瘤康复科'
                            },
                            {
                                name: '肿瘤综合科'
                            }
                        ]
                    },
                    {
                        name: '皮肤性病科',
                        router: 'dermatology_department',
                        childern: [
                            {
                                name: '皮肤科'
                            },
                            {
                                name: '性病科'
                            }
                        ]
                    },
                    {
                        name: '妇产科',
                        router: 'gynaecology_and_obstetrics',
                        childern:[
                            {
                                name: '妇科'
                            },
                            {
                                name: '产科'
                            },
                            {
                                name: '妇幼保健'
                            }
                        ]
                    }
                ],
                department:null
            }
        },
        methods: {
            handle(item){
                console.log(item)
                this.childern=item.childern
                console.log(this.childern)
            },
            select(value){
                this.department=value;
                console.log(this.department);
            },
            next() {
                if (this.$store.state.active++ > 5) this.$store.state.active = 0;
            }
        }
    }
</script>
<style>
.title{
    border-bottom: 1px solid #e5e5e5;
    height: 40px;
    line-height: 40px;
    color: #5a75f6;
    font-size: 1;
    font-family: "microsoft yahei";
    font-weight: 700;
    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 30px;
}

.select{
    border-bottom: 1px solid #e5e5e5;
    height: 40px;
    font-size: 1;
    font-family: "microsoft yahei";
    font-weight: 700;
    margin-bottom: 50px;
    display: flex;
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
}

.select a{
    /* display: flex; */
    line-height: 40px;
    align-items: center;
}

.select-one:hover{
    color: blue;
    cursor: pointer;
}

.select-one{
    margin-left: 60px;
}

.empty{
    height: 300px;
    text-align: center;
}

.full{
    height: 100%;
    display: flex;
    margin-bottom: 50px;
}

.full-one{
    margin-left: 20px;
    text-align: center;
}

.final-department{
    margin-top: 180px;
    height: 100px;
    margin-left: 50px;
}

</style>