<template>
  <div class="hello">
    <img style="width:100px;" src="https://logo-logos.com/wp-content/uploads/2018/02/bitcoin_2.png">
    <h1>Order Size Calculator</h1>
    <h2 style="margin-bottom:30px;">For Cross and Spot</h2>

    <p class="plexy">Coin Balance (COIN OR USDT)</p>
    <input class="texy textbox" type="number" min="0" v-model="accountbalance" step="any">
    <p class="plexy">Risk (SL %)</p>
    <input class="texy textbox" type="number" min="0" v-model="riskpercentage" step="any">
    <p class="plexy">Entry</p>
    <input class="texy textbox" type="number" min="0" v-model="entryprice" step="any">
    <p class="plexy">StopLoss</p>
    <input class="texy textbox" type="number" min="0" v-model="stoploss" step="any">
    <p class="plexy">TakeProfit</p>
    <input class="texy textbox" type="number" min="0" v-model="takeprofit" step="any"><br>
    <button v-on:click="calc()" style="margin-top:20px;padding-left:20px;padding-right:20px;font-size:15px" class="button">Calculate</button>
    <h4 style="margin-top:22px;">{{inlineerror}}</h4>

    <div class="resulting" v-if="resolute">
    <center>
    <div class="grid-cont" style="margin-top:30px;">
      <div class="grid-item grid-header">Quantity</div>
      <div class="grid-item grid-header">Type</div>
      <div class="grid-item grid-header">TPSL Ratio</div>
      <div class="grid-item grid-header">TP Gain</div>
      <div class="grid-item" v-on:click="copyresult(resulted[0])">{{resulted[0]}}</div>
      <div class="grid-item" v-on:click="copyresult(resulted[1])">{{resulted[1]}}</div>
      <div class="grid-item" v-on:click="copyresult(resulted[2]+'R')">{{resulted[2]}}R</div>
      <div class="grid-item" v-on:click="copyresult(resulted[3]+'%')">{{resulted[3]}}%</div>
    </div>
    </center>
    <small>Click to copy results</small>
    </div>
  </div>
</template>

<script>
import { positionSizeCalc } from './ordersize.js'

export default {
  name: 'HelloWorld',
  methods: {
    calc () {
      try{
        this.resulted = positionSizeCalc([this.accountbalance, this.riskpercentage, this.entryprice, this.stoploss, this.takeprofit])
        if(this.resulted[1] == true){
          this.resulted[1] = 'Long'
        }else{
          this.resulted[1] = 'Short'
        }
        this.inlineerror = '';
        this.resolute = true
      }catch(e){
        this.inlineerror = "Please make sure params are valid."
        this.resulted = []
        this.resolute = false;
      }
    },
    copyresult (varr) {
      navigator.clipboard.writeText(varr)
    }
  },
  mounted () {
    //
  },
  data () {
    return {
      accountbalance: '',
      riskpercentage: '',
      entryprice: '',
      stoploss: '',
      takeprofit: '',
      inlineerror: '',

      resulted: [],
      resolute: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.texy {
  margin-top:7px
}
.plexy {
  margin-top:10px
}
.grid-cont {
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 400px;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid #3b3b3b;
}
.grid-item {
  text-align: center;
  color: white;
  background-color:#292929;
  padding: 2px;
}
.grid-item:hover {
  cursor: pointer;
  background-color:#353535;
}
.grid-header {
  background-color:#1f1f1f;
}
.grid-header:hover {
  cursor: auto;
  background-color:#1f1f1f;
}
/*eslint-disable */
</style>
