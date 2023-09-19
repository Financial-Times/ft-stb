export default function Header() {
	return (
		<header
			className="o-header o-header--simple"
			data-o-component="o-header"
			data-o-header--no-js=""
		>
			<div className="o-header__row o-header__top">
				<div className="o-header__container">
					<div className="o-header__top-wrapper">
						<div className="o-header__top-column o-header__top-column--left">
							<a
								href="#o-header-drawer"
								className="o-header__top-link o-header__top-link--menu"
								aria-controls="o-header-drawer"
								title="Open drawer menu"
							>
								<span className="o-header__top-link-label">
									Open drawer menu
								</span>
							</a>
							<a
								href="#o-header-search"
								className="o-header__top-link o-header__top-link--search"
								aria-controls="o-header-search"
								title="Open search bar"
							>
								<span className="o-header__top-link-label">
									Open search bar
								</span>
							</a>
						</div>

						<div className="o-header__top-column o-header__top-column--center">
							<a
								className="o-header__top-logo"
								href="https://www.ft.com/"
								title="Go to Financial Times homepage"
							>
								<span className="o-header__visually-hidden">
									Financial Times
								</span>
							</a>
						</div>

						<div className="o-header__top-column o-header__top-column--right">
							<a
								className="o-header__top-link o-header__top-link--myft"
								href="https://www.ft.com/myft"
								aria-label="My F T"
							>
								<span className="o-header__visually-hidden">myFT</span>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div
				id="o-header-search"
				className="o-header__row o-header__search o--if-js"
				role="search"
				data-o-header-search=""
			>
				<div className="o-header__container">
					<form
						className="o-header__search-form"
						action="https://www.ft.com/search"
						role="search"
						aria-label="Site search"
					>
						<label
							className="o-header__visually-hidden"
							htmlFor="o-header-search-term-js"
						>
							Search the <abbr title="Financial Times">FT</abbr>
						</label>
						<input
							className="o-header__search-term"
							id="o-header-search-term-js"
							name="q"
							type="text"
							placeholder="Search the FT"
						/>
						<button className="o-header__search-submit" type="submit">
							Search
						</button>
						<button
							className="o-header__search-close"
							type="button"
							aria-controls="o-header-search"
							title="Close search bar"
						>
							<span className="o-header__visually-hidden">
								Close search bar
							</span>
						</button>
					</form>
				</div>
			</div>
		</header>
	);
}
