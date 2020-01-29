import React from 'react';
import Link from './Link';
import Image from 'react-bootstrap/Image';

function UserProfile(props) {
  const { login, email, avatarUrl, url } = props
  return (
    <div className="text-center profile">
      <Image fluid roundedCircle className="avatar mb-2" src={avatarUrl} />
      <p className="mb-1"><Link href={url}>{login}</Link></p>
      <p className="mt-0">{email ? email : "No email"}</p>
    </div>
  )
}

export default UserProfile;