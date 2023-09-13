import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


const Dropdown = ({Label, Icon}) => {
    return (
        <DropdownMenu.Root >
            <DropdownMenu.Trigger className='flex justify-end' asChild>
                <button className='flex gap-2 items-center'>
                    
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className='w-[200px]'>
               
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}

export default Dropdown