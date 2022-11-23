<script>
export default {
	name: "CppIcon",
};
</script>

<template>
	<button content="C++" v-tippy="{ placement: 'top', arrow: true }">
		<svg
			class="icon"
			width="128"
			height="128"
			viewBox="0 0 128 128"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M115.4 30.7L67.1 2.89995C66.3 2.39995 65.2 2.19995 64 2.19995C62.8 2.19995 61.7 2.49995 60.9 2.89995L12.9 30.7999C11.2 31.7999 10 34.3 10 36.2V91.9C10 93 10.2 94.3 11 95.4L117.8 33.4C117.2 32.2 116.3 31.3 115.4 30.7V30.7Z"
				fill="#D26383"
			/>
			<path
				d="M10.7 95.3001C11.2 96.1001 11.9 96.8 12.6 97.2L60.7999 125.1C61.5999 125.6 62.7 125.8 63.9 125.8C65.1 125.8 66.2 125.5 67 125.1L115 97.2C116.7 96.2 117.9 93.7001 117.9 91.8001V36.1C117.9 35.2 117.8 34.2 117.3 33.3L10.7 95.3001V95.3001Z"
				fill="#9C033A"
			/>
			<path
				d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5C50.5 88.5 39.5 77.5 39.5 64C39.5 50.5 50.5 39.5 64 39.5C73.1 39.5 81.1 44.5 85.3 52L98.3 44.5C91.5 32.6 78.7 24.5 64 24.5C42.2 24.5 24.5 42.2 24.5 64C24.5 85.8 42.2 103.5 64 103.5C78.6 103.5 91.4 95.5 98.2 83.7L85.3 76.1V76.1Z"
				fill="white"
			/>
			<path
				d="M82.1001 61.8H87.3001V56.5H91.7001V61.8H97.0001V66.2H91.7001V71.4H87.3001V66.2H82.1001V61.8V61.8ZM100.6 61.8H105.8V56.5H110.2V61.8H115.5V66.2H110.2V71.4H105.8V66.2H100.6V61.8V61.8Z"
				fill="white"
			/>

			<defs>
				<filter id="ballooncpp">
					<feGaussianBlur
						in="SourceAlpha"
						stdDeviation="4"
						result="blur"
					></feGaussianBlur>
					<feOffset
						in="blur"
						dx="4"
						dy="4"
						result="offsetBlur"
					></feOffset>
					<feSpecularLighting
						in="blur"
						surfaceScale="5"
						specularConstant=".75"
						specularExponent="20"
						lighting-color="#bbbbbb"
						result="highlight"
					>
						<fePointLight
							x="-5000"
							y="-10000"
							z="20000"
							result="04839686-a98a-4f8f-9273-dd79f08a4b43"
						></fePointLight>
					</feSpecularLighting>
					<feComposite
						in="highlight"
						in2="SourceAlpha"
						operator="in"
						result="highlightApplied"
					></feComposite>
					<feComposite
						in="SourceGraphic"
						in2="highlightApplied"
						operator="arithmetic"
						k2="1"
						k3="1"
						result="highlightText"
					></feComposite>
					<feMerge result="ce8d7405-a4e5-41a3-9a2d-a623ac92290a">
						<feMergeNode in="offsetBlur"></feMergeNode>
						<feMergeNode in="highlightText"></feMergeNode>
					</feMerge>
				</filter>
			</defs>
		</svg>
	</button>
</template>

<style scoped>

</style>
