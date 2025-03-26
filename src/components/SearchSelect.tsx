import { useState } from 'react'
import { InputBase, Combobox, useCombobox } from '@mantine/core'
import useNotes from '@/hooks/useNotes'
import { useNavigate } from 'react-router-dom'

export default function SearchSelect() {
  const { notes } = useNotes()

  const navigate = useNavigate()

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

  const [search, setSearch] = useState('')

  const shouldFilterOptions = notes?.every((item) => item.name !== search)
  const filteredOptions = shouldFilterOptions
    ? notes?.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase().trim()) ||
          item.text.toLowerCase().includes(search.toLowerCase().trim())
      )
    : notes

  const options = filteredOptions?.map((item) => (
    <Combobox.Option value={item.id.toString()} key={item.id}>
      {item.name}
    </Combobox.Option>
  ))

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setSearch('')
        navigate(`/note/${val}`)
        combobox.closeDropdown()
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown()
            setSearch(search || '')
          }}
          placeholder="Поиск"
          value={search}
          onChange={(event) => {
            combobox.updateSelectedOptionIndex()
            setSearch(event.currentTarget.value)
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options && options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  )
}
