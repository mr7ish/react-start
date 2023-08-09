import { Profile } from './profile';

type Profiles = {
	key: number
	name: string
}

const profiles: Profiles[] = Array(9).fill({ key: 0 }).map((_profile: Profiles, index) => ({
	key: index + 1,
	name: `Taylor ${index + 1}`
}))

export const Gallery = () => {
	const gallery = profiles.map(profile => 
		<div className="profile" key={profile.key}>
			<Profile />
			<div className="account">
				{ profile.name }
			</div>
		</div>
	)

	return (
		<>
			<h1 style={{textAlign: 'center'}}>This is a Gallery for Taylor</h1>
			<div className="gallery">
				{ gallery }
			</div>
		</>
	)
}
