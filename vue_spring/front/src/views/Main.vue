<template>
	<div class="container">
		<table class="table">
			<tr>
				<th>글번호</th>
				<th>글쓴이</th>
				<th>내용</th>
				<th>등록날짜</th>
			</tr>
			<tr v-for="item in data" :key="item.idx">
				<td>{{ item.idx }}</td>
				<td>{{ item.name }}</td>
				<td>{{ item.content }}</td>
				<td>{{ item.regDate }}</td>
			</tr>
		</table>
		<transition name="fade">
			<Alert v-if="$store.state.alertData.isAlert" />
		</transition>	
		<Pagination :pageable="pageable" @goPage="goPage" />

		<button @click="testAlert">alert 테스트</button> <br>
		<button @click="testAPI">axiosAPI</button>
	</div>
</template>

<script>
import { getList } from '../api';
import Alert from '@/components/Alert.vue';

import Pagination from '@/components/Pagination.vue';

export default {
	components: {
		Pagination,
		Alert,
	},
	data() {
		return {
			pageable: {},
			data: [],
		};
	},
	created() {
		this.getData();
	},
	methods: {
		goPage(pageNumber) {
			this.pageable.pageNumber = pageNumber;
			this.getData();
		},
		async getData() {
			const { data } = await getList({
				pageNumber: this.pageable.pageNumber || 0,
				pageSize: 10,
			});
			this.data = data.content;
			this.pageable = data.pageable;
			this.pageable.totalElements = data.totalElements;
			this.pageable.totalPages = data.totalPages;
			this.pageable.first = data.first;
			this.pageable.last = data.last;
			console.log(this.pageable);
		},
		testAPI(){
			console.log('testAPI')

			// this.$axios.fetch('https://jsonplaceholder.typicode.com/posts',{
			// 	method : 'POST',
			// 	body: JSON.stringify({
			// 		title : 'foo',
			// 		body:'bar',
			// 		userId : 1,
			// 	}),
			// 	headers:{
			// 		'Content-type':'application/json; charset=UTF-8'
			// 	}
			// })
			// .then(res => console.log(res.json()))
			// .then(json => console.log(json))
			// .catch(err => console.log(err))

			this.$axios.post('https://jsonplaceholder.typicode.com/posts',{
					title : 'foo',
					body:'bar',
					userId : 1
			})
			.then(res => console.log(res))
			.catch(err => console.log(err))

		},
		// alert
		testAlert(){
			this.$store.commit("alertToggle", {
              isAlert: true,
              text: "<h1>모델변경</h1> 성공 <br> 부가설명",
            });
		}
	},
};
</script>

<style></style>
