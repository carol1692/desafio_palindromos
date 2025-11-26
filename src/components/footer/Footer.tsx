import { GithubLogoIcon,  LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
	let data = new Date().getFullYear()

	return (
		<>
			<div className=" w-full flex justify-center border-t">
				<div className="container flex flex-col items-center py-4">
					<p className="text-xl font-bold">Ana Lemos | Copyright: {data}</p>
					<p className="text-lg">Acesse minhas redes sociais</p>
					<div className="flex gap-2">
						<a href="https://www.linkedin.com/in/analemos-3nj0y/" target="_blank">
							<LinkedinLogoIcon size={48} weight="bold" />
						</a>
						<a href="https://github.com/carol1692" target="_blank">
							<GithubLogoIcon size={48} weight="bold" />
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer