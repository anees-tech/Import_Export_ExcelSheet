import React from 'react'
import userPNG from './user.png'

const sidebarList = [
	{
		name: 'Dashboard',
		href: "#",
		svg: `M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z`,
		current: true,
	},
	{
		name: "Item1",
		href: "#",
		svg: `M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z`,
		current: false,
	},
	{
		name: "Item2",
		href: "#",
		svg: `M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z`,
		current: false,
	},
	{
		name: "Item3",
		href: "#",
		svg: `M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z`,
		current: false,
	},
	{
		name: "ItemN",
		href: "#",
		svg: `M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z`,
		current: false,
	},


]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

function Sidebar() {
	return (
		<div className="p-3 max-h-screen space-y-2 w-60  dark:bg-gray-900 dark:text-gray-100 fixed top-0 left-0 bottom-0" style={{ maxHeight: '100vh' }}>
			<div className="flex items-center p-2 space-x-4 mt-14">
				<img src={userPNG} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
				<div>
					<h2 className="text-lg font-semibold">My Profile</h2>
				</div>
			</div>
			<div className="divide-y  divide-gray-700">
				<ul className="pt-2 pb-4 space-y-1 text-sm">
					{sidebarList.map((item) => {
						return (
							<li className={classNames(
								item.current ? "flex items-center px-4 py-2 text-gray-700 bg-gray-400 hover:bg-gray-100" : "flex items-center px-4 py-2 text-white-700 hover:bg-gray-100 dark:hover:bg-gray-800"
							)}>
								<a rel="noopener noreferrer" href={item.href} className="flex items-center p-2 space-x-3 rounded-md">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-black-400">
										<path d={item.svg} />
									</svg>
									<span>{item.name}</span>
								</a>
							</li>
						)
					})}
				</ul>
				<div className=' '>
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
							<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
							<rect width="32" height="64" x="256" y="232"></rect>
						</svg>
						<span>Logout</span>
					</a>
				</div>
			</div>
		</div>

	)
}

export default Sidebar