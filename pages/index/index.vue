<template>
	<view class="content" @touchmove.stop.prevent="()=>{}">
		<view v-if="isShowVideo" class="myvideo">
			<image src="/static/startImage.jpeg" class="startImage"></image>
		</view>
		<view v-if="!isShowVideo" class="myContent" @touchmove.stop.prevent="()=>{}">
			<image class="logo" src="/static/back-icon2.png"></image>
			<view class="line1"></view>
			<view v-if="isShowSlider&&connected&&victroyConnected&&!maskShow"  class="ppContent">
				<pp-slider 
				:min="0"
				:max="100"
				background-color="#1a9ed6"
				active-color="#d0d6e8"
				:vertical="true" 
				:value="slideValue" 
				:show-value="false"
				:block-size="35" 
				:line-size="20"
				:disabled="false"
				@changing="changing" />
			</view>
			<view v-if="connected&&victroyConnected" class="buttonsView">
				
				<view v-if="!isComputeOldType" class="openButtonView" style="left: 0;top: 0;">
					<image v-on:click="writeBluetoothWithId('1')" v-if="!isOpenBtnLight" class="myButton" src="/static/btn_open.png"></image>
					<image v-on:click="writeBluetoothWithId('1')" v-if="isOpenBtnLight"  class="myButton" src="/static/btn_open_light.png"></image>
				</view>
				<view v-if="!isComputeOldType" class="openButtonView"  style="left: 50%;top: 0;">
					<image v-on:click="writeBluetoothWithId('2')" v-if="!isLightBtnLight" class="myButton" src="/static/btn_light.png"></image>
					<image v-on:click="writeBluetoothWithId('2')" v-if="isLightBtnLight"  class="myButton" src="/static/btn_light_light.png"></image>
				</view>
				<view v-if="isComputeOldType" class="openButtonView"  style="left: 25%;top: 0;">
					<image  v-on:click="writeBluetoothWithId('1')" v-if="!isOpenBtnLight" class="myButton" src="/static/btn_open.png"></image>
					<image  v-on:click="writeBluetoothWithId('1')" v-if="isOpenBtnLight"  class="myButton" src="/static/btn_open_light.png"></image>
				</view>
				<view class="openButtonView" style="left: 0;top: 33%;">
					<image v-on:click="writeBluetoothWithId('3')" v-if="!isWind1BtnLight"  class="myButton" src="/static/btn_wind1.png"></image>
					<image v-on:click="writeBluetoothWithId('3')" v-if="isWind1BtnLight"  class="myButton" src="/static/btn_wind1_light.png"></image>
				</view>
				<view class="openButtonView" style="left: 50%;top: 33%;">
					<image v-on:click="writeBluetoothWithId('4')" v-if="!isWind2BtnLight" class="myButton" src="/static/btn_wind2.png"></image>
					<image v-on:click="writeBluetoothWithId('4')" v-if="isWind2BtnLight"  class="myButton" src="/static/btn_wind2_light.png"></image>
				</view>
				<view class="openButtonView" style="left: 0;top: 66%;">
					<image v-on:click="writeBluetoothWithId('5')" v-if="!isWind3BtnLight"  class="myButton" src="/static/btn_wind3.png"></image>
					<image v-on:click="writeBluetoothWithId('5')" v-if="isWind3BtnLight"  class="myButton" src="/static/btn_wind3_light.png"></image>
				</view>
				<view class="openButtonView" style="left: 50%;top: 66%;">
					<image v-on:click="writeBluetoothWithId('6')" v-if="!isWind4BtnLight" class="myButton" src="/static/btn_wind4.png"></image>
					<image v-on:click="writeBluetoothWithId('6')" v-if="isWind4BtnLight"  class="myButton" src="/static/btn_wind4_light.png"></image>
				</view>
			</view>
			<image  v-if="connected"  v-on:click="connectBtnAction" class="connectBtn" src="/static/ble_status_on.png">
			<image  v-if="!connected" v-on:click="connectBtnAction" class="connectBtn" src="/static/ble_status_off.png">
			</image>
			<view class="line2"></view>
		</view>
		
		<view v-if="maskShow" class="uni-mask" @touchmove.stop.prevent="moveHandle" @click="maskclose">
			<scroll-view class="uni-scroll_box" scroll-y @touchmove.stop.prevent="moveHandle" @click.stop="moveHandle">
				<view class="uni-title">
					{{ list.length }}{{ ' devices have been discovered' }}
				</view>
				<view
					class="uni-list-box"
					v-for="(item, index) in list"
					:key="index"
					@click="tapQuery(item)"
				>
					<view>
						<view class="uni-list_name">{{ item.name || item.localName }}</view>
					<!-- 	<view class="uni-list_item">信号强度:{{ item.RSSI }}dBm</view>
						<view class="uni-list_item">UUID:{{ item.deviceId }}</view> -->

					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				slideValue:100,
				isShowVideo:true,
				isShowSlider:false,
				timer:'',
				isComputeOldType:false,
				title: '',
				disabled: [false, true, true, true, true, true, true, true, true, true, true],
				newDeviceLoad: false,
				searchLoad: false,
				maskShow: false,
				equipment: [],
				adapterState: {
					discovering: false,
					available: false
				},
				connected: false,
				victroyConnected: false,
				servicesData: [],
				characteristicsData: [],
				valueChangeData: {},
				isStop:true ,
				list: [],
				serviceId:'',
				characteristicsId:'',
				notify:false,
				isOpenBtnLight:false,
				isLightBtnLight:false,
				isWind1BtnLight:false,
				isWind2BtnLight:false,
				isWind3BtnLight:false,
				isWind4BtnLight:false
			}
		},
		onLoad() {
			
			// this.onBLEConnectionStateChange();
			this.openBluetoothAdapter();
			// toast('Uninitialized Bluetooth adapter');
			
			console.log('111111');
			this.isShowVideo = true;
			plus.navigator.closeSplashscreen();
			setTimeout(() => {
				console.log('77777');
			    this.isShowVideo = false;
				// uni.setStorageSync('CurrentConnectDevice', '');
				// let currentConnectDevice = uni.getStorageSync('CurrentConnectDevice');
				// if(currentConnectDevice.length>2){
				// 	this.startBluetoothDevicesDiscovery();
				// 	this.maskShow = true;
				// }
			}, 2000)
			
			 // this.isShowVideo = false;
			 // let currentConnectDevice = uni.getStorageSync('CurrentConnectDevice');

			 // if(currentConnectDevice.length>2){
			 // 	this.startBluetoothDevicesDiscovery();
			 // 	this.maskShow = true;
			 // }
			 
			
			
			// setInterval(()=>{
			// 	if(this.victroyConnected){
			// 		_this.writeBluetoothWithId('10');
			// 	}
			// },1000);
			let platform = uni.getSystemInfoSync().platform;
			if(platform=='android'){
				
			}
			else{
				setInterval(()=>{
					if(this.victroyConnected){
						_this.writeBluetoothWithId('10');
					}
				},1000);
			}
			
			
			
			// this.slideValue = 30
			// setInterval(()=>{
			// 	this.isShowSlider=true
			// 	this.slideValue = (this.slideValue==100)?0:(this.slideValue+10)
			// 	console.log(this.slideValue)
			// 	this.isShowSlider=false
				
			// },2000);
			// setTimeout(() => {
			//     // this.slideValue = 50
			// }, 3000)
		},
		
		onUnload() {
			if(this.connected) {
				this.closeBLEConnection();
			}
			this.stopBluetoothDevicesDiscovery(true);
			this.closeBluetoothAdapter()
		},
		
		beforeDestroy() {
		    clearInterval(this.timer);
		  },
		methods: {
			changing(val){
				if(!this.connected){
					return;
				}
				let deviceId = this.equipment[0].deviceId;
				let serviceId = this.serviceId;
				let characteristicId = this.characteristicsId;
				
				var num = 224*(100-val)/100;
				var sum = num+64;
				if(sum>255){
					sum = sum-256;
				}
				
				const buffer = new ArrayBuffer(9);
				const dataView = new DataView(buffer);
				dataView.setUint8(0,0xAA);
				dataView.setUint8(1,0xAA);
				dataView.setUint8(2,0xAA);
				dataView.setUint8(3,0xAA);
				dataView.setUint8(4,0x02);
				dataView.setUint8(5,0xFD);
				dataView.setUint8(6,0x40);
				dataView.setUint8(7,0xFF&num);
				dataView.setUint8(8,0xFF&sum);
				
				uni.writeBLECharacteristicValue({
				  deviceId: deviceId, // 设备ID，在【4】里获取到
				  serviceId: serviceId, // 服务UUID，在【6】里能获取到
				  characteristicId: characteristicId, // 特征值，在【7】里能获取到
				  value: buffer,
				  success(res) {
					console.log(res)
				  },
				  fail(err) {
					console.error(err)
				  }
				})
			},
			moveHandle() {},
			/**
			 * 关闭遮罩
			 */
			maskclose(){
				this.maskShow = false;
			},
			connectBtnAction(){
				if(this.connected){
					this.connected = false;
					this.victroyConnected = false;
					this.closeBLEConnection();
				}
				else{
					this.startBluetoothDevicesDiscovery();
					this.maskShow = true;
				}
				uni.setStorageSync('CurrentConnectDevice', '');
			},
			dealReturnData(returnData){
				
				let statusStr = returnData.substr(14,2)
				let lightProStr = returnData.substr(16,2)
				let typeStr = returnData.substr(18,2)
				
				console.log(statusStr)
				console.log(lightProStr)
				console.log(typeStr)
				
				
				if (typeStr=='01') {
					this.isComputeOldType = true
				} else{
					this.isComputeOldType = false
				}
				if(typeStr=='03'){
					this.isShowSlider = true;
				}
				else{
					this.isShowSlider = false;
				}
				if((typeStr!='01')&&(typeStr!='02')&&(typeStr!='03')){
					this.connected = false;
					this.victroyConnected = false;
					this.closeBLEConnection();
					
				}
				else{
					this.victroyConnected = true;
					uni.setStorageSync('CurrentConnectDevice', this.equipment[0].deviceId);
				}
				
				
				var statusStrTwo = parseInt(statusStr,16).toString(2)
				statusStrTwo = statusStrTwo.padStart(8,'0')
				console.log(statusStrTwo)
				var statusTimer = statusStrTwo.substr(0,2)
				var statusWind = statusStrTwo.substr(2,4)
				var statusLight = statusStrTwo.substr(6,2)
				
				this.overOpenBtnBing();
				console.log('statusTimer');
				console.log(statusTimer);
				
				if(statusTimer=='10'){
					this.isOpenBtnLight = true
				}
				else if(statusTimer=='11'){
					this.isOpenBtnLight = true
					this.startOpenBtnBing()
				}
				else{
					this.isOpenBtnLight = false
				}
				
				if ((statusWind =='0000')||!this.isOpenBtnLight) {
					this.isWind1BtnLight = false
					this.isWind2BtnLight = false
					this.isWind3BtnLight = false
					this.isWind4BtnLight = false
					this.isOpenBtnLight = false
				} else if (statusWind =='0000') {
					this.isWind1BtnLight = false
					this.isWind2BtnLight = false
					this.isWind3BtnLight = false
					this.isWind4BtnLight = false
					this.isOpenBtnLight = false
				} else if (statusWind =='0001') {
					this.isWind1BtnLight = true
					this.isWind2BtnLight = false
					this.isWind3BtnLight = false
					this.isWind4BtnLight = false
				} else if (statusWind =='0010') {
					this.isWind1BtnLight = false
					this.isWind2BtnLight = true
					this.isWind3BtnLight = false
					this.isWind4BtnLight = false
				} else if (statusWind =='0100') {
					this.isWind1BtnLight = false
					this.isWind2BtnLight = false
					this.isWind3BtnLight = true
					this.isWind4BtnLight = false
				} else if (statusWind =='1000') {
					this.isWind1BtnLight = false
					this.isWind2BtnLight = false
					this.isWind3BtnLight = false
					this.isWind4BtnLight = true
				}
				
				
				if(statusLight=='00'){
					this.isLightBtnLight = false
					this.slideValue = 100
					// this.isShowSlider = false
				}
				else if(statusLight=='01'){
					this.isLightBtnLight = true
					var lightProTen = parseInt(lightProStr,16).toString(10)
					var tempValue = 100-lightProTen*100/224
					this.slideValue = parseInt(tempValue)
					// this.isShowSlider = true
				}
				console.log('statusLight');
				console.log(statusLight);
				console.log(this.slideValue);

			},
			
			startOpenBtnBing(){
				this.timer = setInterval(()=>{
					if(this.isOpenBtnLight){
						this.isOpenBtnLight = false;
					}else{
						  this.isOpenBtnLight = true;
					}
				},500);
			},
			overOpenBtnBing(){
				clearInterval(this.timer);
			},
			/**
			 * 选择设备
			 */
			queryDevices() {
				// this.newDeviceLoad = true;
				this.showMaskType = 'device';
				this.maskShow = true;
			},
			tapQuery(item) {
				this.$set(this.disabled, 4, false);
				if (this.equipment.length > 0) {
					this.equipment[0] = item;
				} else {
					this.equipment.push(item);
				}
				this.newDeviceLoad = false;
				
				this.maskShow = false;
				this.createBLEConnection();
				// this.getBLEDeviceServices();
			},
			
			
			writeBluetoothWithId(id){
				
				let deviceId = this.equipment[0].deviceId;
				let serviceId = this.serviceId;
				let characteristicId = this.characteristicsId;
				
				var length = (id=='10')?8:9
				
				const buffer = new ArrayBuffer(length)
				const dataView = new DataView(buffer)
				dataView.setUint8(0,0xAA);
				dataView.setUint8(1,0xAA);
				dataView.setUint8(2,0xAA);
				dataView.setUint8(3,0xAA);
				if (id=='10') {
					
					dataView.setUint8(4,0x01);
					dataView.setUint8(5,0xFE);
					dataView.setUint8(6,0x10);
					dataView.setUint8(7,0x10);
				} else{
					dataView.setUint8(4,0x02);
					dataView.setUint8(5,0xFD);
					dataView.setUint8(6,0x20);
					if (id=='1') {
						
						dataView.setUint8(7,0x01);
						dataView.setUint8(8,0x21);
					} 
					else if(id=='2'){
						dataView.setUint8(7,0x06);
						dataView.setUint8(8,0x26);
					}
					else if(id=='3'){
						dataView.setUint8(7,0x05);
						dataView.setUint8(8,0x25);
					}
					else if(id=='4'){
						dataView.setUint8(7,0x04);
						dataView.setUint8(8,0x24);
					}
					else if(id=='5'){
						dataView.setUint8(7,0x03);
						dataView.setUint8(8,0x23);
					}
					else if(id=='6'){
						dataView.setUint8(7,0x02);
						dataView.setUint8(8,0x22);
					}
				}
				uni.writeBLECharacteristicValue({
				  deviceId: deviceId, // 设备ID，在【4】里获取到
				  serviceId: serviceId, // 服务UUID，在【6】里能获取到
				  characteristicId: characteristicId, // 特征值，在【7】里能获取到
				  value: buffer,
				  success(res) {
					console.log(res)
				  },
				  fail(err) {
					console.error(err)
				  }
				})
				
			},
			ab2hex(buffer) {
			  const hexArr = Array.prototype.map.call(
			    new Uint8Array(buffer),
			    function (bit) {
			      return ('00' + bit.toString(16)).slice(-2)
			    }
			  )
			  return hexArr.join('')
			},
			
			/**
			 * 初始化蓝牙设备
			 */
			openBluetoothAdapter() {
				uni.openBluetoothAdapter({
					success: e => {
						console.log('Bluetooth init success:' + e.errMsg);
						console.log(JSON.stringify(e));
						this.isStop = false ;
						this.$set(this.disabled, 0, true);
						this.$set(this.disabled, 1, false);
						this.$set(this.disabled, 10, false);
						this.onBluetoothAdapterInitialised();
					},
					fail: e => {
						console.log(e)
						console.log('Bluetooth init failed with error code:' + (e.errCode || e.errMsg));
						if (e.errCode !== 0) {
							initTypes(e.errCode,e.errMsg);
						}
					}
				});
			},
			
			onBluetoothAdapterInitialised() {
				this.getBluetoothAdapterState();
			},
			/**
			 * 开始搜索蓝牙设备
			 */
			startBluetoothDevicesDiscovery() {
				uni.startBluetoothDevicesDiscovery({
					services: ['FFE0'],
					allowDuplicatesKey: false,
					success: e => {
						console.log('Start searching for Bluetooth devices:' + e.errMsg);
						this.searchLoad = true;
						this.$set(this.disabled, 1, true);
						this.$set(this.disabled, 2, false);
						this.$set(this.disabled, 3, false);
						this.onBluetoothDeviceFound();
					},
					fail: e => {
						console.log('搜索蓝牙设备失败，错误码:' + e.errCode);
						if (e.errCode !== 0) {
							initTypes(e.errCode);
						}
					}
				});
			},
			/**
			 * 停止搜索蓝牙设备
			 */
			stopBluetoothDevicesDiscovery(types) {
				uni.stopBluetoothDevicesDiscovery({
					success: e => {
						console.log('停止搜索蓝牙设备:' + e.errMsg);
						if (types) {
							this.$set(this.disabled, 1, true);
						} else {
							this.$set(this.disabled, 1, false);
						}
						this.$set(this.disabled, 2, true);
						// this.$set(this.disabled, 3, true);
						this.searchLoad = false;
					},
					fail: e => {
						console.log('停止搜索蓝牙设备失败，错误码：' + e.errCode);
						if (e.errCode !== 0) {
							initTypes(e.errCode);
						}
					}
				});
			},
			/**
			 * 发现外围设备
			 */
			onBluetoothDeviceFound() {
				uni.onBluetoothDeviceFound(devices => {
					console.log('开始监听寻找到新设备的事件');
					// this.$set(this.disabled, 3, false);
					console.log(`Devices Found: ${devices.length}`);
					this.stopBluetoothDevicesDiscovery(true);
					this.getBluetoothDevices();	
				});
			},
			
			/**
			 * 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
			 */
			getBluetoothDevices() {
				uni.getBluetoothDevices({
					success: res => {
						this.newDeviceLoad = false;
						console.log('获取蓝牙设备成功:' + res.errMsg);
						 // console.log(JSON.stringify(res))
						let _this = this;
						_this.list = [];
						res.devices.forEach(function (item, index) {
							console.log(item); //输出数组的每一个元素
							if(item.name || item.localName){
								
								_this.list.push(item);
								
							}
							if(item.deviceId == uni.getStorageSync('CurrentConnectDevice')){

								_this.tapQuery(item);
								// break;
							}
						});
						// this.list = res.devices;
					},
					fail: e => {
						console.log('获取蓝牙设备错误，错误码：' + e.errCode);
						if (e.errCode !== 0) {
							initTypes(e.errCode);
						}
					}
				});
			},
			/**
			 * 获取本机蓝牙适配器状态
			 */
			getBluetoothAdapterState() {
				console.log('--->');
				uni.getBluetoothAdapterState({
					success: res => {
						console.log(JSON.stringify(res));
						this.adapterState = res;
					},
					fail: e => {
						console.log('获取本机蓝牙适配器状态失败，错误码：' + e.errCode);
						if (e.errCode !== 0) {
							initTypes(e.errCode);
						}
					}
				});
			},
			/**
			 * 连接低功耗蓝牙
			 */
			createBLEConnection() {
				let deviceId = this.equipment[0].deviceId;
				let _this = this;
				// uni.showToast({
				// 	title: 'Bluetooth Connecting...',
				// 	icon: 'loading',
				// 	duration: 99999
				// });
				uni.createBLEConnection({
					// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
					deviceId,
					success: res => {
						console.log(res);
						console.log('连接蓝牙成功:' + res.errMsg);
						// 连接设备后断开搜索 并且不能搜索设备
						// this.stopBluetoothDevicesDiscovery(true);
						this.onBLEConnectionStateChange();
						uni.hideToast();
						setTimeout(() => {
							if(!_this.victroyConnected){
								toast('Error device');
								if(_this.connected){
									_this.connected = false;
									_this.victroyConnected = false;
									_this.closeBLEConnection();
								}
							}
						}, 3000)
						
						_this.getBLEDeviceServices();
						let platform = uni.getSystemInfoSync().platform;
						if(platform=='android'){
							setTimeout(() => {
							    _this.getBLEDeviceServices();
							}, 1000)
						}
						else{
							_this.getBLEDeviceServices();
						}
						// this.connected = true;
					},
					fail: e => {
						console.log('连接低功耗蓝牙失败，错误码：' + e.errCode);
						if (e.errCode !== 0) {
							initTypes(e.errCode);
						}
					}
				});
			},
			/**
			 * 断开与低功耗蓝牙设备的连接
			 */
			closeBLEConnection() {
				let deviceId = this.equipment[0].deviceId;
				uni.closeBLEConnection({
					deviceId,
					success: res => {
						
						console.log(res);
						console.log('断开低功耗蓝牙成功:' + res.errMsg);
						this.$set(this.disabled, 1, false);
						this.$set(this.disabled, 3, true);
						this.$set(this.disabled, 4, true);
						this.$set(this.disabled, 5, true);
						this.$set(this.disabled, 6, true);
						this.$set(this.disabled, 7, true);
						this.$set(this.disabled, 8, true);
						this.$set(this.disabled, 9, true);
						this.equipment = [];
						this.servicesData = [];
						this.characteristicsData = [];
						this.serviceId = '';
						this.characteristicsId = '';
						toast('Connection closed')
						this.openBluetoothAdapter()
					},
					fail: e => {
						console.log('断开低功耗蓝牙成功，错误码：' + e.errCode);
						if (e.errCode !== 0) {
							initTypes(e.errCode);
						}
						this.openBluetoothAdapter()
					}
				});
			},
			/**
			 * 获取所有服务
			 */
			getBLEDeviceServices() {
				let deviceId = this.equipment[0].deviceId;
				console.log('获取所有服务的 uuid:' + deviceId);
				let _this = this;
				uni.getBLEDeviceServices({
					// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
					deviceId,
					success: res => {
						console.log(JSON.stringify(res.services));
						console.log('获取设备服务成功:' + res.errMsg);
						this.$set(this.disabled, 7, true);
						this.$set(this.disabled, 8, true);
						// this.showMaskType = 'service';
						// this.list = res.services;
						res.services.forEach(function (item, index) {
							console.log(item); //输出数组的每一个元素
							// if(item.uuid.includes('FFE0')){
								
							// }
							console.log(_this.serviceId);
							console.log(item.uuid);
							_this.serviceId = item.uuid;
							setTimeout(function() {
								_this.getBLEDeviceCharacteristics()
							}, 300);
						});
				
						this.characteristicsData = [];
						// this.maskShow = true;
					},
					fail: e => {
						console.log('获取设备服务失败，错误码：' + e.errCode);
						if (e.errCode !== 0) {
							initTypes(e.errCode);
						}
					}
				});
			},
			/**
			 * 获取某个服务下的所有特征值
			 */
			getBLEDeviceCharacteristics() {
				let deviceId = this.equipment[0].deviceId;
				let serviceId = this.serviceId;
				console.log('asdasdasd');
				console.log(deviceId);
				console.log(serviceId);
				let _this = this;
				uni.getBLEDeviceCharacteristics({
					// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
					deviceId,
					// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
					serviceId,
					success: res => {
						console.log(JSON.stringify(res));
						console.log('获取特征值成功:' + res.errMsg);
						this.$set(this.disabled, 7, true);

						res.characteristics.forEach(function (item, index) {
							console.log(item); //输出数组的每一个元素
							// if(item.uuid.includes('FFE1')){
								
							// }
							console.log('获取特征值成功:' + item);
							_this.characteristicsId = item.uuid;
							console.log('获取特征值成功:' + item.properties.notify);
							_this.notify = item.properties.notify;
							
							_this.readBLECharacteristicValue();
							// setTimeout(function() {
							// 	return _this.writeBluetoothWithId('1')
							// }, 300);
						});
					},
					fail: e => {
						console.log('获取特征值失败，错误码：' + e.errCode);
						if (e.errCode !== 0) {
							initTypes(e.errCode);
						}
					}
				});
			},
			/**
			 * 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
			 */
			onBLEConnectionStateChange() {
				uni.onBLEConnectionStateChange(res => {
					// 该方法回调中可以用于处理连接意外断开等异常情况
					console.log(`蓝牙连接状态 -------------------------->`);
					console.log(JSON.stringify(res));
					if (!res.connected) {

						if(this.isStop) {
							this.connected = false;
							this.victroyConnected = false;
							this.closeBLEConnection();
							return ;
						}
						console.log('断开低功耗蓝牙成功:');
						this.$set(this.disabled, 1, false);
						this.$set(this.disabled, 3, true);
						this.$set(this.disabled, 4, true);
						this.$set(this.disabled, 5, true);
						this.$set(this.disabled, 6, true);
						this.$set(this.disabled, 7, true);
						this.$set(this.disabled, 8, true);
						this.$set(this.disabled, 9, true);
						this.searchLoad = false;
						this.equipment = [];
						this.servicesData = [];
						this.characteristicsData = [];
						this.valueChangeData = {};
						
						this.connected = false;
						this.victroyConnected = false;
						// this.openBluetoothAdapter();
						toast('Bluetooth connection disconnected');
					}
				});
			},
			/**
			 * 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用
			 */
			readBLECharacteristicValue() {
				let deviceId = this.equipment[0].deviceId;
				let serviceId = this.serviceId;
				let characteristicId = this.characteristicsId;
				console.log('哈哈哈');
				console.log(deviceId);
				console.log(serviceId);
				console.log(characteristicId);
				console.log('哈哈哈');
				let _this = this;
				this.connected = true;
				uni.readBLECharacteristicValue({
					// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
					deviceId,
					// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
					serviceId,
					// 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
					characteristicId,
					success: res => {
						console.log('读取设备数据值成功');
						console.log(JSON.stringify(res));
						_this.notifyBLECharacteristicValueChange();
						
						let platform = uni.getSystemInfoSync().platform;
						if(platform=='android'){
							setTimeout(function() {
								_this.writeBluetoothWithId('10');
							}, 300)
						}
						else{
							_this.writeBluetoothWithId('10');
						}
						
					},
					fail(e) {
						console.log('读取设备数据值失败，错误码：' + e.errCode);
						if (e.errCode !== 0) {
							initTypes(e.errCode);
						}
					}
				});
				// this.onBLECharacteristicValueChange();
			},
			/**
			 * 监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。
			 */
			onBLECharacteristicValueChange() {
				// 必须在这里的回调才能获取
				uni.onBLECharacteristicValueChange(characteristic => {
					console.log('监听低功耗蓝牙设备的特征值变化事件成功');
					console.log(JSON.stringify(characteristic));
					this.valueChangeData = characteristic;
				});
			},
			/**
			 * 订阅操作成功后需要设备主动更新特征值的 value，才会触发 uni.onBLECharacteristicValueChange 回调。
			 */
			notifyBLECharacteristicValueChange() {
				let deviceId = this.equipment[0].deviceId;
				let serviceId = this.serviceId;
				let characteristicId = this.characteristicsId;
				let notify = this.notify;
				console.log(deviceId);
				console.log(serviceId);
				console.log(characteristicId);
				console.log(notify);
				let _this = this;
				uni.notifyBLECharacteristicValueChange({
					state: true, // 启用 notify 功能
					// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
					deviceId,
					// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
					serviceId,
					// 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
					characteristicId,
					success(res) {
						console.log('notifyBLECharacteristicValueChange success:' + res.errMsg);
						console.log(JSON.stringify(res));
						uni.onBLECharacteristicValueChange(function(res) {
								var receiveValue = _this.ab2hex(res.value) //2进制数据转为16进制字符串
								
								console.log("蓝牙返回数据为："+receiveValue)
								_this.dealReturnData(receiveValue)
							})
					}
				});
			},
			/**
			 * 	断开蓝牙模块
			 */
			closeBluetoothAdapter(OBJECT) {
				uni.closeBluetoothAdapter({
					success: res => {
						console.log('断开蓝牙模块成功');
						this.isStop = true ;
						this.$set(this.disabled, 0, false);
						this.$set(this.disabled, 1, true);
						this.$set(this.disabled, 2, true);
						this.$set(this.disabled, 3, true);
						this.$set(this.disabled, 4, true);
						this.$set(this.disabled, 5, true);
						this.$set(this.disabled, 6, true);
						this.$set(this.disabled, 7, true);
						this.$set(this.disabled, 8, true);
						this.$set(this.disabled, 9, true);
						this.$set(this.disabled, 10, true);
						this.equipment = [];
						this.servicesData = [];
						this.characteristicsData = [];
						this.valueChangeData = {};
						this.adapterState = [];
						this.searchLoad =false;
						toast('Disconnect Bluetooth');
					}
				});
			}
		}
	}
	/**
	 * 判断初始化蓝牙状态
	 */
	function initTypes(code, errMsg) {
		switch (code) {
			case 10000:
				toast('Uninitialized Bluetooth adapter');
				break;
			case 10001:
				toast('Bluetooth not detected, please turn on Bluetooth and try again!');
				break;
			case 10002:
				toast('No specified device found');
				break;
			case 10003:
				toast('Connect failed');
				break;
			case 10004:
				toast('No specified service found');
				break;
			case 10005:
				toast('No specified feature found');
				break;
			case 10006:
				toast('Connection has been disconnected');
				break;
			case 10007:
				toast('The current feature does not support this operation');
				break;
			case 10008:
				toast('All exceptions reported by other systems');
				break;
			case 10009:
				toast('Unique to Android system, system version below 4.3 does not support BLE');
				break;
			default:
				break;
				// toast(errMsg);
		}
	}
	
	/**
	 * 弹出框封装
	 */
	function toast(content, showCancel = false) {
		uni.showModal({
			title: 'Prompt',
			confirmText:'Confirm',
			content,
			showCancel
		});
	}
</script>

<style>
	.content {
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
		overflow: hidden;
		height: 100%;
		-webkit-overflow-scrolling: touch;
	}
	.myContent{
		position: absolute;
		top: var(--status-bar-height);
		bottom: 70rpx;
		width: 100%;
		overflow: hidden;
		-webkit-overflow-scrolling: touch;
	}
	.logo {
		position: absolute;
		left: 215rpx;
		height: 200rpx;
		width: 320rpx;
		top: 20rpx;
	}
	.line1 {
		position: absolute;
		height: 10rpx;
		width: 750rpx;
		top: 250rpx;
		background-color: rgb(0, 166, 223);
	}
	.line2 {
		/* display: flex; */
		position: absolute;
		height: 10rpx;
		width: 750rpx;
		bottom: 50rpx;
		background-color: rgb(0, 166, 223);
	}
	.buttonsView{
		position:absolute;
		top:320rpx;
		bottom:260rpx;
		left: 10%;
		width:80%;
		height:auto;
	}
	.connectBtn{
		position:absolute;
		left: 135rpx;
		width: 480rpx;
		height: 100rpx;
		bottom: 130rpx;
		border-radius: 50rpx;
	}
	.openButtonView{
		position:absolute;
		width:50%;
		height:33%;
		display: flex;
		align-items: center;
		justify-content:center;
	}
	.myButton{
		width: 184rpx;
		height: 184rpx;
	}
	.uni-mask {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		width: 100%;
		background: rgba(0, 0, 0, 0.6);
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	
	.uni-scroll_box {
		height: 70%;
		background: #fff;
		border-radius: 20rpx;
	}
	.uni-list-box {
		margin: 0 20rpx;
		padding: 15rpx 0;
		border-bottom: 1px #f5f5f5 solid;
		box-sizing: border-box;
	}
	.uni-list:last-child {
		border: none;
	}
	.uni-list_name {
		font-size: 34rpx;
		color: #333;
		line-height: 60rpx;
		height: 60rpx;
	}
	.uni-list_item {
		font-size: 24rpx;
		color: #555;
		line-height: 1.5;
	}
	
	.uni-success_box {
		position: absolute;
		left: 0;
		bottom: 0;
		min-height: 100rpx;
		width: 100%;
		background: #fff;
		box-sizing: border-box;
		border-top: 1px #eee solid;
	}
	.uni-success_sub {
		/* width: 100%%; */
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
	}
	.uni-close_button {
		padding: 0 20rpx;
		height: 60rpx;
		line-height: 60rpx;
		background: #ce3c39;
		color: #ffffff;
		border-radius: 10rpx;
	}
	.uni-success_content {
		height: 600rpx;
		margin: 30rpx;
		margin-top: 0;
		border: 1px #eee solid;
		padding: 30rpx;
	}
	.uni-content_list {
		padding-bottom: 10rpx;
		border-bottom: 1px #f5f5f5 solid;
	}
	.uni-tips {
		text-align: center;
		font-size: 24rpx;
		color: #666;
	}
	.uni-title {
		/* width: 100%; */
		/* height: 80rpx; */
		height: 80rpx;
		line-height: 80rpx;
		font-size: 36rpx;
		text-align: center;
	}
	.ppContent{
		/* width: 120rpx; */
		position:absolute;
		 top:340rpx;
		 bottom:280rpx;
		 left:345rpx;
		/* bottom:260rpx; */
		/* top:350rpx;
		bottom:290rpx;
		left: 45%; */
		/* width:80%; */
		/* height:auto; */
		
		/* width: 500rpx; */
		/* margin: 100rpx; */
		/* display: flex; */
		/* align-items: center; */
		/* justify-content:center; */
		
		/* height: calc(100%-580rpx); */
		/* height: 740rpx; */
		z-index: 999;
	}
	
	.myvideo {
		/* top: var(--status-bar-height); */
		/* top: calc(100%-150px); */
		height: 100vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.startImage {
		/* top: var(--status-bar-height); */
		/* top: calc(100%-150px); */
		height: 240rpx;
		width: 360rpx;
		object-fit: contain;
	}
</style>
