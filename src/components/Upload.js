import { Container, HStack, Input, VStack, Button } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useEffect } from 'react';

const Upload = () => {
  useEffect(() => {
    document.title="Upload Video";
  }, [])
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'blue.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />

        <form>
          <HStack>
            <Input
              required
              type={'file'}
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100% + 36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                },
              }}
            ></Input>
             <Button colorScheme={'blue'} type={'submit'}>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
