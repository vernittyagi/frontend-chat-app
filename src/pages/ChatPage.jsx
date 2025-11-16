import React, {useState} from 'react'
import Chatwindow from '../components/ChatWindow'
import Sidebar from '../components/Sidebar'
import ContactInfo from '../components/ContactInfo'

function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(null)
  const [contactClicked, setcontactClicked] = useState(false)

  const onSelectChat = (chat) => {
    setSelectedChat(chat)
    console.log("chat selected and transported to chatpage - ", chat);
    setcontactClicked(false)
  }

  const onContactClicked = () => {
    setcontactClicked(true)
  }

  const onClickCloseContact = () => {
    setcontactClicked(false)
  }

  return (
    <div className='flex h-screen bg-[#f6f5f5] overflow-hidden'>
      <div className='w-[30vw] border-r flex flex-col border-gray-400  p-2 bg-white'>
        <Sidebar selectedChat={selectedChat} onSelectChat={onSelectChat}/>
      </div>
      <div className={`${contactClicked?"w-[40vw] border-r border-gray-400":"w-[70vw]"} h-screen`}>
        <Chatwindow selectedChat={selectedChat} contactClicked={contactClicked} onContactClicked={onContactClicked}/>
      </div>
      {contactClicked && <div className='w-[30vw] transition-all'><ContactInfo selectedChat={selectedChat} onClickCloseContact={onClickCloseContact} /></div>}
    </div>
  )
}

export default ChatPage
