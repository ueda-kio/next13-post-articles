import { Box, Spinner } from '@/app/common/components';

export default function Loading() {
	return (
		<Box justifyContent="center" display="flex">
			<Spinner color="orange.400" size="xl" />
		</Box>
	);
}
