<template>
    <div>
        <van-nav-bar title="chatGPT" />
        <div class="chat-content">
            <div v-for="(item, index) in recordContent" :key="index">
                <!-- 对方 -->
                <div class="word" v-if="!item.mineMsg">
                    <img src="../assets/fc2b690b-c58f-4c4c-a67d-f13485b6f173.png">
                    <div class="info">
                        <p class="time">chatGPT</p>
                        <div class="info-content">{{item.contactText}}</div>
                    </div>
                </div>
                <!-- 我的 -->
                <div class="word-my" v-else>
                    <div class="info">
                        <p class="time">Arney</p>
                        <div class="info-content">{{item.contactText}}</div>
                    </div>
                    <img src="../assets/101838628_p0.png">
                </div>
            </div>
        </div>
        <div class="vanSearch">
            <van-search show-action v-model="search" @focus="keyWord" placeholder="请输入搜索关键词">
                <template #action>
                    <div @click="chatSearch">搜索</div>
                </template>
            </van-search>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { Toast } from 'vant';
    import Mixins from '@/utils/mixins.js'
    export default {
        mixins: [Mixins],
        data() {
            return {

            };
        },
        methods: {
            keyWord() {
                // 获取焦点时根据移动端的键盘高度来设置搜索框的位置
                let keyHeight = document.body.clientHeight
                let searchHeight = document.querySelector('.van-search').offsetHeight
                let searchTop = keyHeight - searchHeight
                document.querySelector('.van-search').style.top = searchTop + 'px'
            }
        },
    };
</script>

<style lang="scss" scoped>
    .chat-content {
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        background-image: url('../assets/89107270_p0.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: calc(100vh - 100px);
        overflow: hidden;
        overflow-y: scroll;

        .word {
            display: flex;
            // align-items: center;
            margin-bottom: 20px;

            img {
                width: 40px;
                height: 40px;
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
                    max-width: 70%;
                }

                //小三角形
                .info-content::before {
                    position: absolute;
                    left: -8px;
                    top: 8px;
                    content: '';
                    border-right: 10px solid #fff;
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
                width: 40px;
                height: 40px;
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
                    background: #95ec69;
                    text-align: left;
                    border-radius: 5px;
                }

                //小三角形
                .info-content::after {
                    position: absolute;
                    right: -8px;
                    top: 8px;
                    content: '';
                    border-left: 10px solid #95ec69;
                    border-top: 8px solid transparent;
                    border-bottom: 8px solid transparent;
                }
            }
        }
    }

    .vanSearch {
        position: fixed;
        width: 100%;
        bottom: 0;
        border-top: 1px solid #ccc;
    }
</style>