import { Container, Box, Text } from '@/app/common/components';

export default function Footer() {
	return (
		<Box bg="gray.50" color="gray.700" as="footer">
			<Container maxW="5xl" py={4}>
				<Text as="small">© 2023 ueda-kio</Text>
			</Container>
		</Box>
	);
}
