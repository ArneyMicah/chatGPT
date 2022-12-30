<template>
    <div>
        <el-container>
            <el-main>
                <div class="chat-content">
                    <div v-for="(item, index) in recordContent" :key="index">
                        <!-- 对方 -->
                        <div class="word" v-if="!item.mineMsg">
                            <img src="../assets/fc2b690b-c58f-4c4c-a67d-f13485b6f173.png">
                            <div class="info">
                                <p class="time">chatGPT {{item.time | year}}</p>
                                <div class="info-content">{{item.contactText}}</div>
                            </div>
                        </div>
                        <!-- 我的 -->
                        <div class="word-my" v-else>
                            <div class="info">
                                <p class="time">Arney {{item.time | year}}</p>
                                <div class="info-content">{{item.contactText}}</div>
                            </div>
                            <img src="../assets/101838628_p0.png">
                        </div>
                    </div>
                </div>
            </el-main>
            <el-footer>
                <el-button type="primary" icon="el-icon-setting" @click="settingKey">配置个人Key</el-button>
                <el-input placeholder="请输入搜索内容" v-model="search" class="input-with-select"></el-input>
                <el-button icon="el-icon-search" @click="chatSearch">搜索</el-button>
            </el-footer>
        </el-container>
        <el-dialog title="配置个人Key" :visible.sync="dialogVisible" width="50%">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="配置个人Key">
                    <el-input v-model="form.userKey"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="determine">取 消</el-button>
                <el-button type="primary" @click="determine">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import Mixins from '@/utils/mixins.js'
    export default {
        mixins: [Mixins],
        data() {
            return {
                dialogVisible: false,
                form: {
                    userKey: ''
                }
            };
        },
        methods: {
            settingKey(){
                let openaiKey = localStorage.getItem('openaiKey');
                this.form.userKey = openaiKey
                this.dialogVisible = true
            },
            determine(){
                this.form.userKey = ''
                this.dialogVisible = false
            },
            determine(){
                localStorage.setItem('openaiKey', this.form.userKey)
                this.dialogVisible = false
            }
        },
    };
</script>

<style lang="scss" scoped>
    .el-footer {
        background-color: #b3b3d144;
        color: #333;
        line-height: 60px;
        display: flex;
        align-items: center;
    }

    .el-main {
        background-color: #e9eef341;
        color: #333;
        text-align: center;
        height: calc(100vh - 60px);

        .chat-content {
            width: 100%;
            height: 100%;

            .word {
                display: flex;
                margin-bottom: 20px;

                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }

                .info {
                    margin-left: 10px;
                    text-align: left;

                    .time {
                        font-size: 12px;
                        color: rgba(51, 51, 51, 0.8);
                        margin: 0;
                        height: 20px;
                        line-height: 20px;
                        margin-top: -5px;
                    }

                    .info-content {
                        padding: 10px;
                        font-size: 14px;
                        float: left;
                        margin-right: 10px;
                        position: relative;
                        margin-top: 8px;
                        background: #fff;
                        text-align: left;
                        border-radius: 5px;
                        max-width: 500px;
                    }

                    //小三角形
                    .info-content::before {
                        position: absolute;
                        left: -8px;
                        top: 8px;
                        content: '';
                        border-right: 10px solid #FFF;
                        border-top: 8px solid transparent;
                        border-bottom: 8px solid transparent;
                    }
                }
            }

            .word-my {
                display: flex;
                justify-content: flex-end;
                margin-bottom: 20px;

                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }

                .info {
                    width: 90%;
                    margin-left: 10px;
                    text-align: right;

                    .time {
                        font-size: 12px;
                        color: rgba(51, 51, 51, 0.8);
                        margin: 0;
                        height: 20px;
                        line-height: 20px;
                        margin-top: -5px;
                        margin-right: 10px;
                    }

                    .info-content {
                        max-width: 70%;
                        padding: 10px;
                        font-size: 14px;
                        float: right;
                        margin-right: 10px;
                        position: relative;
                        margin-top: 8px;
                        background: #A3C3F6;
                        text-align: left;
                        border-radius: 5px;
                    }

                    //小三角形
                    .info-content::after {
                        position: absolute;
                        right: -8px;
                        top: 8px;
                        content: '';
                        border-left: 10px solid #A3C3F6;
                        border-top: 8px solid transparent;
                        border-bottom: 8px solid transparent;
                    }
                }
            }
        }
    }
</style>