import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import DefinedTermSchema from '@/components/seo/DefinedTermSchema'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/resources/glossary'])

const glossaryTerms: { term: string; definition: string }[] = [
  // ── A ──────────────────────────────────────────────────────────────────────
  {
    term: 'AAMA',
    definition:
      'American Architectural Manufacturers Association. A national trade association that establishes voluntary standards for the window, door, storefront, curtain wall and skylight industries.',
  },
  {
    term: 'Absorptance',
    definition:
      'The ratio of radiant energy absorbed to total incident radiant energy in a glazing system.',
  },
  {
    term: 'Acrylic',
    definition:
      'A non-crystalline thermoplastic with good weather resistance, shatter resistance, and optical clarity; sometimes used for glazing.',
  },
  {
    term: 'Active',
    definition:
      'In paired or double doors, the hinged door leaf which is primarily operable.',
  },
  {
    term: 'Adhesion',
    definition:
      'That property of a coating or sealant which measures its ability to stick or bond to the surface to which it is applied.',
  },
  {
    term: 'Adhesive Failure',
    definition:
      'Failure of a compound by pulling away from the surface with which it is in contact.',
  },
  {
    term: 'Aerogel',
    definition:
      'A microporous, transparent silicate foam used as a glazing cavity fill material, offering possible U-values below 0.10 BTU/(h-sq ft-°F).',
  },
  {
    term: 'Air Infiltration',
    definition:
      'The amount of air leaking in and out of a building through cracks in walls, windows and doors.',
  },
  {
    term: 'Air-Leakage Rating',
    definition:
      'A measure of the rate of air-leakage around a window, door, or skylight in the presence of a specific pressure difference. Expressed in units of cubic feet per minute per square foot of frame area (cfm/sq ft). The lower a window\'s air-leakage rating, the better its air tightness.',
  },
  {
    term: 'Air Pockets',
    definition:
      'Bubbles of air formed within a compound or between two adjacent beads of compound applied successively in a joint.',
  },
  {
    term: 'Adjustable-Rate Mortgage',
    definition:
      'Loan whose interest rate changes periodically according to movements in the financial market over the term of the loan. Many offer lower-than-market initial interest rates that rise only gradually for the first few years.',
  },
  {
    term: 'Affidavit Label',
    definition:
      'For fire-rated doors, a label on a door product on which the manufacturer, not an independent laboratory, states that the door meets a type or types of test criteria.',
  },
  {
    term: 'Annealed Glass',
    definition:
      'Regular glass which has not been heat strengthened or tempered. Most window glass is annealed.',
  },
  {
    term: 'Annealing',
    definition:
      'The process of heating metal, glass or other materials above the critical or re-crystallization temperature, then controlled cooling to eliminate the effects of cold-working, relieve internal stresses or improve strength, ductility or other properties.',
  },
  {
    term: 'Annual Percentage Rate',
    definition:
      'Annual cost, to the consumer, of credit over the life of a loan including interest, service charges, points, loan fees, mortgage insurance and other items. Lenders are required by law to disclose the APR.',
  },
  {
    term: 'Anodize',
    definition:
      'To provide an extremely hard non-corrosive oxide film on the surface of aluminum by electrolytic action. The electrochemical process produces an anodic coating by conversion of aluminum into essentially aluminum oxide. Anodic coatings may be transparent, of varying shades of silver, gray or brown, or colors may be incorporated by the use of dyes or pigments.',
  },
  {
    term: 'ANSI',
    definition:
      'American National Standards Institute. Clearing house for all types of standards and specifications.',
  },
  {
    term: 'Appraisal',
    definition:
      'Unbiased opinion, made by a qualified person, of a property\'s value based on its style and appearance, construction quality, usefulness and the value of comparable properties.',
  },
  {
    term: 'Argon Gas',
    definition:
      'An inert, nontoxic gas used in insulating glass units to reduce heat transfer. Argon is denser than air, which reduces convective heat transfer between panes.',
  },
  {
    term: 'ASHRAE',
    definition:
      'American Society of Heating, Air-conditioning and Refrigerating Engineers.',
  },
  {
    term: 'Asphalt',
    definition:
      'A waterproofing agent that is applied to roofing materials during the manufacturing process.',
  },
  {
    term: 'Assessment',
    definition:
      'Tax levied on a property, in addition to general taxes, or a value placed on the worth of a property by a taxing authority. Usually used for infrastructure improvements such as roads and electricity.',
  },
  {
    term: 'Assumption',
    definition:
      'Transaction allowing a buyer or new owner to assume responsibility of payments for an existing loan instead of getting a new loan.',
  },
  {
    term: 'Astragal',
    definition:
      'The post-type fitting on the latch-side edge of one of a set of paired or double doors, which covers the margin between doors when they are closed, and which houses or contains the weatherstrip.',
  },
  {
    term: 'ASTM',
    definition:
      'American Society for Testing and Materials. Organization that develops methods for testing of materials.',
  },
  {
    term: 'Awning Window',
    definition:
      'A window that is hinged at the top and swings outward for ventilation. Awning windows provide excellent ventilation even during light rain because the open sash acts as an awning.',
  },
  // ── B ──────────────────────────────────────────────────────────────────────
  {
    term: 'Backerboard',
    definition:
      'A flat material used on the face of the house, between the studs and the siding, to provide a nailable surface for the siding.',
  },
  {
    term: 'Backfill',
    definition:
      'Fills the back channel. Material can be other than putty or glazing compound.',
  },
  {
    term: 'Back Putty',
    definition:
      'Also referred to as bedding or bed glazing. The small bead of glazing material between the glass and the sash on the opposite side from the face glazing. Also, the act of applying the back putty before placing the glass into position.',
  },
  {
    term: 'Backset',
    definition:
      'For locating a machined hole, recess, or mortise, the distance from an edge or surface to the center or edge of the recess, hole or mortise.',
  },
  {
    term: 'Back Surfacing',
    definition:
      'Product applied to the back of roofing shingles. The product is made from a fine mineral matter.',
  },
  {
    term: 'Back-up Material',
    definition:
      'A compressible material placed in a joint before applying a sealant, to limit the depth of the sealant configuration. The material may also act as a bond breaker.',
  },
  {
    term: 'Balance',
    definition:
      'A mechanical device (normally spring-loaded) used in single- and double-hung windows as a means of counterbalancing the weight of the sash during opening and closing.',
  },
  {
    term: 'Balance Covers',
    definition:
      'A snap-in covering that conceals the block and tackle balance system within the window frame, helping to keep dirt and dust out of the chamber.',
  },
  {
    term: 'Ball-Bearing Hinge',
    definition:
      'A heavier-duty hinge than the standard hinge, with bearings supporting the pivots. Ball-bearing hinges are usually used for heavy doors that will be in commercial or industrial use.',
  },
  {
    term: 'Base Flashing',
    definition:
      'A portion of flashing which is attached to or resting on the deck to direct the flow of water onto the roof covering.',
  },
  {
    term: 'Bay Window',
    definition:
      'An angled combination of three windows that project out from the wall of the home. The windows are usually positioned at 30- or 45-degree angles.',
  },
  {
    term: 'Beading',
    definition:
      'An architectural term that refers to a narrow, half-round molding that runs the length of your siding.',
  },
  {
    term: 'Beveled MasterFrame',
    definition:
      'Some windows feature a unique fusion-welded design that accommodates differing installation methods and architectural styles. The angled portion of the masterframe profile that adds a three-dimensional appearance to the exterior of the window.',
  },
  {
    term: 'Bite',
    definition:
      'Amount of overlap between the top of a stop and the inserted edge of a panel or lite of glass; also the amount of overlap of a heel bead into the glass or panel.',
  },
  {
    term: 'Black Body',
    definition:
      'The ideal, perfect emitter and absorber of thermal radiation. It emits radiant energy at each wavelength at the maximum rate possible as a consequence of its temperature, and absorbs all incident radiance.',
  },
  {
    term: 'Block',
    definition:
      'A piece of neoprene, silicone, or other suitable material used to position the glass in the frame.',
  },
  {
    term: 'Blocking',
    definition:
      'To shim, level and plumb windows in required positions.',
  },
  {
    term: 'Block and Tackle Balance System',
    definition:
      'The block and tackle system utilizes a high-density nylon cord pulley action which is attached to a moveable block that travels up and down within a metal chamber. Tension from a heavy duty coil spring at the top of the block creates the proper resistance necessary for smooth operation of the window sash.',
  },
  {
    term: 'BOCA',
    definition:
      'Building Officials and Code Administrations.',
  },
  {
    term: 'Bond Breaker',
    definition:
      'A release type of material used to prevent adhesion of the sealant to the back-up material or back of the joint. Used in expansion joints or splice joints.',
  },
  {
    term: 'Boot',
    definition:
      'A term used for the rubber part at the bottom or top end of an astragal, which beds the astragal end and seals between the end and the door frame or sill.',
  },
  {
    term: 'Bottom Rail',
    definition:
      'The bottom horizontal member of a window sash.',
  },
  {
    term: 'Bow Window',
    definition:
      'An angled combination of windows in 3-, 4- or 5-lite configurations. As the windows are joined to each other, they combine to form an arch shape that projects from the wall of the home.',
  },
  {
    term: 'Box-Framed',
    definition:
      'In door and sidelite assemblies, a term used to differentiate door and sidelite units which are first framed as separate units, with heads and sills separate and the width of the door or sidelite panels.',
  },
  {
    term: 'Brad',
    definition:
      'A small nail with a small head, usually used to fasten small trim and moldings.',
  },
  {
    term: 'Brick Mould',
    definition:
      'A molding to trim the outside edge of a door frame. Brickmould is most often applied to prehung units.',
  },
  {
    term: 'Broker',
    definition:
      'Person who receives a commission or fee for bringing buyer and seller together and assisting in a real estate transaction. The broker is not the proprietor of the property but is a representative of the owner. A license is required in most states.',
  },
  {
    term: 'BTU',
    definition:
      'British Thermal Unit: the amount of heat energy necessary to raise the temperature of one pound of water one degree Fahrenheit. The energy used for heating and cooling is measured by the number of BTUs needed to keep a building at a comfortable temperature.',
  },
  {
    term: 'Buck',
    definition:
      'A term usually used in masonry construction to describe a door frame or a subframe in a masonry opening, around which a steel door frame wraps and is fastened.',
  },
  {
    term: 'Building Code',
    definition:
      'Local regulations and ordinances that regulate design, construction and materials used in construction. Building codes are used to ensure safety and welfare.',
  },
  {
    term: 'Bundle',
    definition:
      'A package of roofing shingles.',
  },
  {
    term: 'Butt',
    definition:
      'A type of hinge commonly used to assemble doors. Butt hinges are often referred to simply as "butts".',
  },
  {
    term: 'Butt Edge',
    definition:
      'The bottom part of shingle tabs.',
  },
  {
    term: 'Buttering',
    definition:
      'Application of compound or sealant to the flat surface of a member before placing it into position.',
  },
  {
    term: 'Buttlock',
    definition:
      'The bottom edge of a siding or soffit panel, or accessory piece, opposite the nailing slots, which locks onto the preceding panel.',
  },
  {
    term: 'Butyl',
    definition:
      'A rubber material that seals the glass to the spacer, creating an airtight and water-tight insulated glass unit.',
  },
  {
    term: 'Buydown',
    definition:
      'Subsidy (usually paid by a builder or developer) to reduce the monthly payments on a mortgage loan during the early years.',
  },
  {
    term: 'Buyers Agent',
    definition:
      'A real estate agent or licensed sales person who represents only the buyer in searching for and negotiating in a real estate transaction.',
  },
  // ── C ──────────────────────────────────────────────────────────────────────
  {
    term: 'Callback',
    definition:
      'Request by home owner for builder or contractor to handle a service request.',
  },
  {
    term: 'Cam-Action Lock and Keeper',
    definition:
      'The mechanisms which pull and secure the sashes together when placed in the locked position.',
  },
  {
    term: 'Came, Caming',
    definition:
      'Formed metal stripping, usually made of brass or zinc-plated steel, used between cut-glass pieces to assemble the pieces into a decorative glass panel. Caming is soldered at joints to bond the glass assembly together.',
  },
  {
    term: 'Cap',
    definition:
      'Maximum allowable increase of an interest rate or monthly payment for an adjustable-rate loan either during an adjustment period or over the life of the loan.',
  },
  {
    term: 'Carpet Shim',
    definition:
      'A spacer block used under a door sill to raise the sill an appropriate amount if carpet is used, so the door panel clears the carpet when opened.',
  },
  {
    term: 'Casement Window',
    definition:
      'A window with a side-hinged sash that opens and closes outward by a crank handle mechanism. Available in continuous mainframe with multi-lite configurations.',
  },
  {
    term: 'Casing',
    definition:
      'Architectural ornament consisting of various widths, thicknesses and shapes, which can be applied to the framework of window and door units.',
  },
  {
    term: 'Catalyst',
    definition:
      'A material which markedly speeds up the cure or reaction of another substance when added in minor quantities.',
  },
  {
    term: 'Caulk',
    definition:
      'An adhesive compound used for filling joints or sealing cracks. Caulk assists in the prevention of water and air leakage. This product is customarily made of silicone, acrylic or a rubber-based material.',
  },
  {
    term: 'Caulking',
    definition:
      'To use caulk to fill or seal a joint or crack, which prevents air and water leaking.',
  },
  {
    term: 'Cavity Wall',
    definition:
      'A type of building wall construction consisting of an outer wall fastened to an inner wall separated by an air space.',
  },
  {
    term: 'Certificate of Occupancy',
    definition:
      'Written authorization from an official agency stating the property meets the requirement of local codes, ordinances and regulations. This ensures that the property is suitable for habitation.',
  },
  {
    term: 'CFM',
    definition:
      'Cubic feet per minute (ft³/min). Unit for air flow.',
  },
  {
    term: 'Chain of Title',
    definition:
      'History of all documents transferring title to a parcel of real property, starting with the earliest existing and ending with the most recent.',
  },
  {
    term: 'Change Order',
    definition:
      'Customer\'s written consent to add, delete or change an item specified in a contract.',
  },
  {
    term: 'Channel',
    definition:
      'The area of the accessory trim or corner post where siding or soffit panels are inserted. Channels are named for the letters of the alphabet they resemble (e.g., J-channel, F-channel, etc.).',
  },
  {
    term: 'Channel Depth',
    definition:
      'The measurement from the bottom of the channel to the top of the stop, or measurement of sight line to base of the channel.',
  },
  {
    term: 'Channel Glazing',
    definition:
      'The sealing of the joints around lites of glass or panels set in a U-shaped channel employing removable or fixed stops.',
  },
  {
    term: 'Check Rail',
    definition:
      'The bottom horizontal member of the upper sash and the top horizontal member of the lower sash which meet at the middle of a double-hung window.',
  },
  {
    term: 'Chemical Cure',
    definition:
      'A change in the properties of a material due to polymerization or vulcanization, which may be effected by heat, catalysts, exposure to the atmosphere, or combinations of these.',
  },
  {
    term: 'Clad',
    definition:
      'Provided with a facing or jacket which works as a protection against weather and provides a finished appearance. Cladding may be painted metal, plastic, or a heavy coating applied by the manufacturer.',
  },
  {
    term: 'Clearance',
    definition:
      'The space or distance allowed for anchorage or erection purposes or to accommodate dimensional variations in a building structure.',
  },
  {
    term: 'Clear Jambs',
    definition:
      'Natural wood door frames, without paint or primer applied. Appears to be made of full-length pieces of stock, without joints or knots.',
  },
  {
    term: 'Clips',
    definition:
      'Wire spring devices to hold glass in rabbeted sash without stops, and face glazed.',
  },
  {
    term: 'Closed-Cell Foam',
    definition:
      'Sponge-like material, usually used in gaskets and weatherstripping, which compresses into joints, but absorbs little water.',
  },
  {
    term: 'Closer Block',
    definition:
      'An inside reinforcement, usually placed across the top edge of a door, to enable firm fastening of self-closing hardware to the door.',
  },
  {
    term: 'Closing',
    definition:
      'Meeting to sign documents that transfer title from a seller to a buyer (also referred to as settlement). The final step in the process of making a sale.',
  },
  {
    term: 'Closing Costs',
    definition:
      'Fees incurred at settlement for obtaining a mortgage loan and transferring a real estate title.',
  },
  {
    term: 'Cohesive Failure',
    definition:
      'Failure of a compound when placed under a strain, in which — because of insufficient elasticity and elongation to absorb the strain — the compound splits and opens.',
  },
  {
    term: 'Collar',
    definition:
      'A band of material that is placed over a vent pipe to seal the roof, circling the vent pipe.',
  },
  {
    term: 'Compatibility',
    definition:
      'The ability of two or more materials to exist in close and permanent association for an indefinite period with no adverse effect of one on the other.',
  },
  {
    term: 'Compression',
    definition:
      'Pressure exerted on a compound in a joint, as by placing a lite of glass or panel against bedding, or placing a stop in position against a bead of compound.',
  },
  {
    term: 'Condensation',
    definition:
      'The deposit of water vapor from the air on any cold surface whose temperature is below the dew point, such as a cold window glass or frame that is exposed to humid indoor air.',
  },
  {
    term: 'Conduction',
    definition:
      'Heat transfer through a solid material by contact of one molecule to the next. Heat flows from a higher-temperature area to a lower-temperature one.',
  },
  {
    term: 'Contingency',
    definition:
      'A condition or conditions that must be met before a contract becomes legally binding.',
  },
  {
    term: 'Continuous',
    definition:
      'A sill used for a type of door and sidelite unit in which the unit has full-width top and bottom frame parts, and an internal post or posts separating sidelites from the door panel.',
  },
  {
    term: 'Convection',
    definition:
      'A heat transfer process involving motion in a fluid (such as air) caused by the difference in density of the fluid and the action of gravity. Convection affects heat transfer from the glass surface to room air, and between two panes of glass.',
  },
  {
    term: 'Core',
    definition:
      'The center section or part of a door, or door part.',
  },
  {
    term: 'Corner Plug / Corner Seal Pad',
    definition:
      'A small part, usually made of resilient material, used to seal water which gets beyond the bottom ends of weatherstrip in doors.',
  },
  {
    term: 'Course',
    definition:
      'A row of panels, one panel wide, running the length of the house from one side to the other, or, in the case of vertical siding, from top to bottom.',
  },
  {
    term: 'Cove Molding',
    definition:
      'A small molded wood lineal piece, usually formed with a scooped face, used to trim and fasten a panel into a frame.',
  },
  {
    term: 'Coved Glazing Beads',
    definition:
      'A contoured piece of vinyl that holds the glass in place within the sash and adds an elegant, finished look.',
  },
  {
    term: 'CRF',
    definition:
      'Condensation Resistance Factor: an indication of a window\'s ability to resist condensation. The higher the CRF, the less likely condensation is to occur.',
  },
  {
    term: 'Crossbore',
    definition:
      'A large through-hole, near the edge of a door panel, usually 2-1/8 inch in diameter, which houses a cylinder lockset or deadbolt latch.',
  },
  {
    term: 'Curing Time',
    definition:
      'The time required to complete the chemical reaction of a product to reach its final physical form as a result of chemical reaction.',
  },
  {
    term: 'Curtain Wall',
    definition:
      'An exterior building wall which carries no roof or floor loads and consists entirely or principally of metal, or a combination of metal, glass and other surfacing materials supported by a metal framework. Types include Custom (designed specifically for one project) and Standard (made up principally of parts standardized by the manufacturer).',
  },
  {
    term: 'Cylinder Lock',
    definition:
      'Lock hardware which mounts into a door which has been prepared with a bored hole or holes through the face, and into the edge.',
  },
  // ── D ──────────────────────────────────────────────────────────────────────
  {
    term: 'Deadbolt',
    definition:
      'A latch used to secure a door closed, the latch being driven from the door into a receiver in the jamb or frame.',
  },
  {
    term: 'Decibel',
    definition:
      'A unit for expressing the relative intensity of sounds. Zero represents the average least perceptible sound. Roughly 130 represents the average pain level.',
  },
  {
    term: 'Deed',
    definition:
      'Legal document representing transfer of property ownership from one person to another.',
  },
  {
    term: 'Degree-Day',
    definition:
      'A unit that represents a 1°F deviation from some fixed reference point (usually 65°F) in the mean, daily outdoor temperature.',
  },
  {
    term: 'Default',
    definition:
      'When a borrower is unwilling or unable to make the required payments of a mortgage contract.',
  },
  {
    term: 'Deflection',
    definition:
      'The distance a door has moved away from its closed and latched position, usually measured at the top unsupported latch-side corner. Deflection may be caused by wind pressure or heat. Deflection is temporary; the door returns to position when the force is removed.',
  },
  {
    term: 'Desiccant',
    definition:
      'Moisture-absorbing material used inside the spacer in an insulated glass assembly to control moisture levels and prevent moisture from frosting or condensing on the inside glass surfaces.',
  },
  {
    term: 'Dew Point',
    definition:
      'The temperature at which the condensation of water vapor in a space begins, at a given state of humidity and pressure, as the temperature is reduced. Used in testing sealed insulating glass. The lower the number, the higher the resistance to forming condensation.',
  },
  {
    term: 'Distributor (Glass)',
    definition:
      'Buys glass from the primary manufacturer, stocks and resells it to smaller glass shops and other outlets that install or sell to the ultimate consumer.',
  },
  {
    term: 'Divided Light',
    definition:
      'A window with a number of smaller panes of glass separated and held in place by muntins.',
  },
  {
    term: 'Do-Dah',
    definition:
      'Also known as the Tilt-Latch. A device that, when squeezed inward, allows the window sash to tilt in from the mainframe for easy cleaning.',
  },
  {
    term: 'DOE-2.1E',
    definition:
      'A building-simulation computer program used to calculate total annual energy use.',
  },
  {
    term: 'Doorlite',
    definition:
      'An assembly of frame and glass panel which, when fitted to a door in a formed or cut-out hole, creates a door with a glass opening.',
  },
  {
    term: 'Dormer',
    definition:
      'A section of roof which protrudes from the house, usually containing one or more windows.',
  },
  {
    term: 'Double Channel Lineal',
    definition:
      'A siding accessory that joins two soffit panels.',
  },
  {
    term: 'Double Hung Window',
    definition:
      'A window that has two vertical operating sashes — both the upper and lower sash can be opened. Double hung windows offer flexible ventilation and tilt-in cleaning. The most popular residential window style in the United States.',
  },
  {
    term: 'Drip Cap / Head Flashing',
    definition:
      'An accessory installed with vertical siding to ensure that water drips away from panels and does not infiltrate them; also used as a vertical base.',
  },
  {
    term: 'Dry Glazing',
    definition:
      'A method of securing glass in a frame by use of a dry, preformed resilient gasket, without the use of a compound.',
  },
  {
    term: 'Drywall Opening',
    definition:
      'A rectangular opening in a wall, usually interior, prepared to the size necessary to receive a pre-hung assembly.',
  },
  {
    term: 'Dry-Wall Remove',
    definition:
      'Ability to remove sashes and astragal in new construction single-hung and/or sliding windows to allow for oversize access, such as entering drywall into a newly constructed structure.',
  },
  {
    term: 'DSE Sealants',
    definition:
      'A sealant that exhibits properties of high structural strength and low moisture vapor transmission rates.',
  },
  {
    term: 'Due-on-Sale',
    definition:
      'Clause in a mortgage contract which allows the lender to demand the entire outstanding balance upon sale or transfer of the property.',
  },
  {
    term: 'Dummy Cylinder',
    definition:
      'A lock without a latch, typically used for the passive door panel of a double door unit, so that the hardware appears equal to that used on the active panel.',
  },
  {
    term: 'Dynamic Elongation Test',
    definition:
      'Elongation or stretching of a material under continuous movement.',
  },
  // ── E ──────────────────────────────────────────────────────────────────────
  {
    term: 'Earnest Money',
    definition:
      'Amount paid to a seller to display the potential purchaser\'s intent to buy.',
  },
  {
    term: 'Easement',
    definition:
      'Permission granted to a person or company giving them access to the owner\'s land. The land owner may willingly grant an easement or can be ordered to grant one by local jurisdiction.',
  },
  {
    term: 'Eaves',
    definition:
      'The lower edge of a roof that projects over the exterior wall.',
  },
  {
    term: 'Edge Bore',
    definition:
      'The hole bored through the edge of a door to allow the latch to pass through, into the strike.',
  },
  {
    term: 'Edge Effect',
    definition:
      'Two-dimensional heat transfer at the edge of a glazing unit due to the thermal properties of spacers and sealants.',
  },
  {
    term: 'Egress Code',
    definition:
      'The minimum opening of a window for people to exit or firefighters to enter a building/dwelling. Different states or regions have different code requirements.',
  },
  {
    term: 'Elasticity',
    definition:
      'Pliability, ability to take up expansion and contraction; opposite of brittleness.',
  },
  {
    term: 'Elastomer',
    definition:
      'An elastic, rubber-like substance which may either occur naturally or be produced synthetically.',
  },
  {
    term: 'Electric Strike',
    definition:
      'A mechanism which allows a switch to open the latch of a door.',
  },
  {
    term: 'Electrochromics',
    definition:
      'Glazing with optical properties that can be varied continuously from clear to dark with a low-voltage signal. Ions are reversibly injected or removed from an electrochromic material, causing the optical density to change.',
  },
  {
    term: 'Electromagnetic Spectrum',
    definition:
      'Radiant energy over a broad range of wavelengths.',
  },
  {
    term: 'Emergency Exit Windows',
    definition:
      'Fire escape windows (egress windows) large enough for a person to climb out. In U.S. building codes, each bedroom must be provided with an exit window. The exact width, area, and height from the floor are specified in the building codes.',
  },
  {
    term: 'Emissivity',
    definition:
      'The capability of a surface to radiate heat energy.',
  },
  {
    term: 'Emittance',
    definition:
      'The ratio of the radiant flux emitted by a specimen to that emitted by a blackbody at the same temperature and under the same conditions.',
  },
  {
    term: 'End Seal Pad',
    definition:
      'A closed-cell foam piece, about 1/16-inch thick, in the shape of a sill profile, fastened between the sill and jamb to seal the joint.',
  },
  {
    term: 'Energy Star',
    definition:
      'A joint venture between the US Environmental Protection Agency (EPA) and the US Department of Energy (DOE) designed to encourage homeowners to purchase energy-efficient products. Using less energy in our homes reduces CO2 emissions released into the atmosphere from burning fossil fuels.',
  },
  {
    term: 'EPDM',
    definition:
      'A weathering compound with good resistance to ultra-violet radiation. Good memory and weathering characteristics.',
  },
  {
    term: 'Epoxy',
    definition:
      'A thermoplastic resin formed by combining epichlorohydrin and bisphenols. Requires a curing agent for hardening. Has outstanding adhesion, strength and excellent chemical resistance.',
  },
  {
    term: 'Equity',
    definition:
      'Difference between the value of a home and what is owed on it.',
  },
  {
    term: 'Escrow',
    definition:
      'Handling of funds or documents by a third party on behalf of the buyer and/or seller.',
  },
  {
    term: 'Escrow Amount',
    definition:
      'Amount set up by a lender into which periodic payments are made, usually monthly, for taxes, hazard insurance assessments and mortgage insurance premiums. Funds are held in trust by the lender who pays the sums as they come due.',
  },
  {
    term: 'Escutcheon',
    definition:
      'A stamped decorative plate, usually circular, to trim the shaft of a door knob or deadbolt latch.',
  },
  {
    term: 'Etched Glass',
    definition:
      'Glass used for doorlites on which a decorative pattern is engraved by means of chemical action or mechanical sand-blasting.',
  },
  {
    term: 'Evacuated Glazing',
    definition:
      'Insulating glazing composed of two glass layers, hermetically sealed at the edges, with a vacuum between to eliminate convection and conduction. A spacer system is needed to keep the panes from touching.',
  },
  {
    term: 'Exposure',
    definition:
      'The width of each panel of siding. Also known as a reveal.',
  },
  {
    term: 'Extension Unit',
    definition:
      'A framed fixed door panel, with a full-sized lite of glass, field-installed or shop-installed adjacent to a two-panel patio door, to make the door unit into a three-panel door.',
  },
  {
    term: 'Exterior Glazed',
    definition:
      'Glass set from the exterior of the building.',
  },
  {
    term: 'Exterior Stop',
    definition:
      'The removable molding or bead holding the lite or panel in place, located on the exterior side of the lite or panel.',
  },
  {
    term: 'Extrusion',
    definition:
      'A cast formed by pressing material through a die. Most window frames are clad with extruded vinyl or aluminum.',
  },
  {
    term: 'Eyebrow Windows',
    definition:
      'Low, inward-opening windows with a bottom-hinged sash. These attic windows built into the top molding of the house are sometimes called "lie-on-your-stomach" or "slave" windows. Often found on Greek Revival and Italianate houses.',
  },
  // ── F ──────────────────────────────────────────────────────────────────────
  {
    term: 'Fabricator (Glass)',
    definition:
      'Buys glass from the glass manufacturer and fabricates (tempering, laminating, insulating, etc.) to their customers\' requirements.',
  },
  {
    term: 'Face',
    definition:
      'Refers to the side of a siding or soffit panel that is showing once the panel has been installed.',
  },
  {
    term: 'Face Glazing',
    definition:
      'On a rabbeted sash without stops, the triangular bead of compound applied with a glazing knife after bedding, setting and clipping the lite in place.',
  },
  {
    term: 'Face-Nailing',
    definition:
      'The action of fastening directly onto the face side of a panel (instead of using the nail hem slot). This practice is generally not used in siding installation.',
  },
  {
    term: 'Faceplate',
    definition:
      'The plated or solid metal trim piece, usually 1" x 2-1/4", housed flush into the edge of a door, through which projects the latch of a passage lock or deadbolt.',
  },
  {
    term: 'Fair Market Value',
    definition:
      'Price at which property is transferred between a willing buyer and willing seller, each of whom has reasonable knowledge of all pertinent facts and neither being under compulsion to buy or sell.',
  },
  {
    term: 'Fanlight',
    definition:
      'A half-circle window over a door or window, with radiating bars. Also called circle top transom.',
  },
  {
    term: 'Fascia Board',
    definition:
      'A board attached to the ends of the rafters between the roofing material and the soffit overhang. Fascia cap is the covering around that board.',
  },
  {
    term: 'Federal Housing Administration',
    definition:
      'Federal agency that insures mortgages with lower down payment requirements than conventional loans.',
  },
  {
    term: 'Fenestration',
    definition:
      'The placement of window openings in a building wall, one of the important elements in controlling the exterior appearance of a building. Also, a window, door or skylight and its associated interior or exterior elements, such as shades or blinds.',
  },
  {
    term: 'Fiberglass',
    definition:
      'A composite material made of extremely fine glass fibers, used in making numerous products including entry doors, cornice moldings, columns, balustrades, and baluster systems.',
  },
  {
    term: 'Fillet Bead',
    definition:
      'Placing caulking or sealant in such a manner that it forms an angle between the materials being caulked.',
  },
  {
    term: 'Filler',
    definition:
      'A material such as cotton mop yarn, glass fiber insulation, oakum, polyethylene, etc., which is pressed into an opening or joint so that the compound applied to seal the joint will exert pressure and form good contact against the sides of the joint or opening.',
  },
  {
    term: 'Finger Joint',
    definition:
      'A way of joining short sections of board stock together, end to end, to make longer stock. Door and frame parts are often made using finger-jointed pine stock.',
  },
  {
    term: 'Fixed Lite',
    definition:
      'A pane of glass installed directly into non-operating framing members; also, the opening or space for a pane of glass in a non-operating frame.',
  },
  {
    term: 'Fixed Panel',
    definition:
      'An inoperable panel of a sliding glass door or slider window.',
  },
  {
    term: 'Fixed Rate Mortgage',
    definition:
      'Mortgage with an interest rate that remains constant over the life of the loan.',
  },
  {
    term: 'Fixed Window',
    definition:
      'A window with no operating sashes.',
  },
  {
    term: 'Flashing',
    definition:
      'A thin, flat material, usually aluminum, positioned under or behind J-channels, corner posts, windows, etc., to keep draining water from penetrating the home.',
  },
  {
    term: 'Float Glass',
    definition:
      'Glass which has its bottom surfaces formed by floating on molten metal, the top surface being gravity formed, producing a high optical quality of glass with parallel surfaces. Float glass is replacing plate glass.',
  },
  {
    term: 'Flush-Glazed',
    definition:
      'A type of glazed door which has its glass perimeter moldings flush with or set down from the face of the surrounding door.',
  },
  {
    term: 'Flush Joint',
    definition:
      'Compound applied in an opening or joint so that it is even with the top edge of the joint.',
  },
  {
    term: 'Foam',
    definition:
      'Rigid or flexible plastic, light in weight and cellular in structure, used in door construction. Rigid foam is used as the insulating and binding core for doors. Flexible foam is sometimes used as a gasket.',
  },
  {
    term: 'Fogging',
    definition:
      'A deposit of contamination left on the inside surface of a sealed insulating glass unit due to extremes of temperature. Usually happens with a failed sealed insulating glass unit.',
  },
  {
    term: 'Foot Bolt',
    definition:
      'A steel pin housed in a door bottom edge or astragal, with a latch mechanism, which can be driven down to project into a receiver socket or hole in the floor or threshold, to better secure the door when closed.',
  },
  {
    term: 'Frame',
    definition:
      'In door assemblies, the perimeter members at the top and sides, to which the door is hinged and latched. See also: Jamb.',
  },
  {
    term: 'FreedomMAXX Low-E HP',
    definition:
      'A multiple-layer vacuum-deposition Low-E insulating glass unit filled with argon gas. It delivers performance up to 40% more energy-efficient than many other types of Low-E or Mid-E glass systems, and is over twice as energy-efficient as uncoated insulating glass units. Combines Solarban 60 Low-E glass, the Intercept warm-edge spacer system, and insulating argon gas.',
  },
  {
    term: 'FreedomMAXX 10',
    definition:
      'The ultimate glass system from Suburban Construction. It combines two panes of multiple-layer vacuum-deposition Low-E glass with an interior glass pane and two insulating chambers of krypton gas. The result is a triple-pane insulating glass unit that delivers ultra-high energy efficiency — over 300% more efficient than ordinary Low-E glass systems.',
  },
  {
    term: 'French Patio Doors',
    definition:
      'A two-panel glass door where both panels operate and swing either inward or outward.',
  },
  {
    term: 'Furring / Furring Strip',
    definition:
      'A wooden or steel framing material, usually 1" x 3", used to provide an even nailing base. To "fur" a surface means to apply these strips.',
  },
  {
    term: 'Fusion-Welded',
    definition:
      'The process of joining materials by melting them together with extreme heat (in most cases over 500°F), resulting in the materials combining into a one-piece unit.',
  },
  // ── G ──────────────────────────────────────────────────────────────────────
  {
    term: 'Gain',
    definition:
      'A notch across the end of a board or wood part.',
  },
  {
    term: 'Galvanized',
    definition:
      'An adjective used to describe steel which has been zinc-coated. Galvanized steel is resistant to corrosion.',
  },
  {
    term: 'Garden Window',
    definition:
      'Designed much like a bay or bow window, a garden window also extends from the wall to the exterior of the home. It is built in a square or rectangular shape at right angles. The two sidelights often operate for added ventilation.',
  },
  {
    term: 'Gas Fill',
    definition:
      'A gas other than air, usually argon or krypton, placed between window or skylight glazing panes to reduce the U-factor by suppressing conduction and convection.',
  },
  {
    term: 'Gasket',
    definition:
      'A strip of flexible material which, in an assembly of parts, prevents air and water from penetrating or passing through joints between parts.',
  },
  {
    term: 'Glazing',
    definition:
      'The glass or plastic panes in a window, door or skylight.',
  },
  {
    term: 'Glazing Compound',
    definition:
      'A soft dough-like material used for filling and sealing the space between a pane of glass and its surrounding frame.',
  },
  {
    term: 'Glazing Bead',
    definition:
      'A molding or stop around the inside of a window frame to hold the glass in place.',
  },
  {
    term: 'Grids',
    definition:
      'Optional horizontal or vertical lineals installed between the glass panes that help to create the appearance of a divided window design.',
  },
  {
    term: 'Grille',
    definition:
      'For doors with glass lites or inserts, a removable face-mounted assembly of thin wood or plastic pieces, which when in place gives the lite or insert a patterned multi-pane look.',
  },
  {
    term: 'Grooved Glass',
    definition:
      'Glass which is decorated with abrasively routed recesses. Grooving can give a single piece of glass a multi-pane look.',
  },
  {
    term: 'Gun Consistency',
    definition:
      'Compound formulated to a degree of softness suitable for application through the nozzle of a caulking gun.',
  },
  {
    term: 'Gutter Cap',
    definition:
      'A gutter protection system that uses surface tension to guide rainwater into the gutter while causing leaves, seeds, and debris to fall to the ground. Gutter Cap is installed over existing or new gutters and eliminates the need for regular gutter cleaning.',
  },
  // ── H ──────────────────────────────────────────────────────────────────────
  {
    term: 'Hand Operated Pressure Gun',
    definition:
      'A caulking gun operated by hand.',
  },
  {
    term: 'Handing',
    definition:
      'A term which describes or determines the direction of swing of a door when opening.',
  },
  {
    term: 'Hand Tool',
    definition:
      'A tool with a narrow, blunt blade used to press tool-consistency compound into joints and to finish off the surface.',
  },
  {
    term: 'Hazard Insurance',
    definition:
      'Protection against damage caused by fire, wind storms or other common hazards. Many lenders require borrowers to carry it in an amount at least equal to the mortgage.',
  },
  {
    term: 'Head Bolt',
    definition:
      'A steel pin housed in a door top or astragal. See also: Foot Bolt.',
  },
  {
    term: 'Heat-Absorbing Glass',
    definition:
      'Window glass containing chemicals (with gray, bronze, or blue-green tint) which absorb light and heat radiation, and reduce glare and brightness. See also: Tinted Glass.',
  },
  {
    term: 'Heat Gain',
    definition:
      'The transfer of heat from outside to inside. Measured in terms of the fuel consumption required to maintain a comfortable indoor temperature.',
  },
  {
    term: 'Heat Loss',
    definition:
      'The transfer of heat from inside to outside by means of conduction, convection, and radiation through all surfaces of the house.',
  },
  {
    term: 'Heat-Strengthened Glass',
    definition:
      'Glass which is reheated, after forming, just below melting point and then cooled. A compressed surface is formed which increases its strength. Used for spandrel glass.',
  },
  {
    term: 'Hermetically Sealed Unit',
    definition:
      'An insulating glass unit made up of two lites of glass, separated by a roll-formed aluminum spacer tube (at the full perimeter) which is filled with a moisture-absorbing material. The unit is completely sealed, creating a moisture-free, clean dead air space.',
  },
  {
    term: 'Hinge',
    definition:
      'An assembly of metal plates and a cylindrical metal pin, which when fastened to a door edge and to a door frame, allow the door to swing or rotate in its frame.',
  },
  {
    term: 'Hinge Stile',
    definition:
      'The full-length vertical edge of a door at the side which fastens to its frame with hinges.',
  },
  {
    term: 'Hinged Patio Doors',
    definition:
      'A two-panel glass door where one panel is stationary or fixed, while the other operates and swings either inward or outward.',
  },
  {
    term: 'Hopper Window',
    definition:
      'A bottom-hinged sash window that opens inward for ventilation.',
  },
  {
    term: 'Horned Sill',
    definition:
      'A sill which has been coped or cut at its ends so that the sill projects across the outside face of the bottoms of door jambs, allowing the bottom ends of the brickmold pieces to butt and join to the top of the sill.',
  },
  {
    term: 'Humidity',
    definition:
      'The percentage of moisture in the air in relationship to the amount of moisture the air could hold at a given temperature. 100% relative humidity would be rain.',
  },
  {
    term: 'HVAC',
    definition:
      'Common building industry abbreviation: heating, ventilation and air conditioning systems.',
  },
  {
    term: 'Hypalon',
    definition:
      'A synthetic, vulcanizable rubber manufactured by reacting polyethylene plastic with chlorine and sulfur dioxide.',
  },
  // ── I ──────────────────────────────────────────────────────────────────────
  {
    term: 'ICC',
    definition:
      'International Code Council. A national organization that publishes model codes for adoption by states and other agencies. Codes include the International Building Code (IBC) and the International Energy Conservation Code (IECC).',
  },
  {
    term: 'IGCC',
    definition:
      'Insulating Glass Certification Council.',
  },
  {
    term: 'IG Unit',
    definition:
      'Abbreviation for insulated glass unit.',
  },
  {
    term: 'IGU (Insulating Glass Unit)',
    definition:
      'A factory-assembled window unit consisting of two or more panes of glass separated by a spacer and sealed hermetically to contain a gas fill (air, argon, or krypton). The IGU is the core thermal performance component of a modern window.',
  },
  {
    term: 'Inactive',
    definition:
      'A term for a door panel fixed in its frame. Inactive door panels are not hinged and are not operable.',
  },
  {
    term: 'Inclusion',
    definition:
      'Presence of foreign matter in a finished material, such as glass.',
  },
  {
    term: 'Infrared Radiation',
    definition:
      'Invisible, electromagnetic radiation beyond red light on the spectrum, with wavelengths greater than 0.7 microns.',
  },
  {
    term: 'Infrastructure',
    definition:
      'Public facilities and services needed to support residential development including highways, bridges, schools and sewer and water systems.',
  },
  {
    term: 'Inspection',
    definition:
      'Examination of work completed on a structure to determine compliance with building code and other code requirements.',
  },
  {
    term: 'Insulated Glass',
    definition:
      'A glass assembly of multiple full-lite pieces, separated by a perimeter spacer and sealed as a unit. Insulated glass in residential doors is usually made with two thicknesses of 1/8" glass, separated by an airspace up to 3/4-inch thick.',
  },
  {
    term: 'Insulated Shutters',
    definition:
      'Insulating panels that cover a window opening to reduce heat loss.',
  },
  {
    term: 'Inswing',
    definition:
      'A term used to describe an exterior entry door unit for which, when the hinged door panel is opened, the panel swings into the building.',
  },
  {
    term: 'Interior Glazed',
    definition:
      'Glass set from the interior of the building.',
  },
  {
    term: 'Interior Stop',
    definition:
      'The removable molding or bead that holds the lite, as contrasted to an exterior stop which is located on the exterior side of a lite or panel.',
  },
  {
    term: 'Interlocker',
    definition:
      'An upright frame member of a panel in a sliding glass door which engages with a corresponding member in an adjacent panel when the door is closed. Also called interlocking stile.',
  },
  // ── J ──────────────────────────────────────────────────────────────────────
  {
    term: 'Jalousie',
    definition:
      'The jalousie window is made up of horizontally mounted louvered glass that abuts each other tightly when closed and extends outward when cranked open.',
  },
  {
    term: 'Jamb',
    definition:
      'A vertical member at the side of a window frame or the horizontal member at the top of the window frame, as in head jamb.',
  },
  {
    term: 'Jamb Jack',
    definition:
      'A fastener device for fixing a door frame to a wall structure, which allows the space or margin between the frame and the structure opening to be varied by turning the fastener screw.',
  },
  {
    term: 'Jamb Stop',
    definition:
      'In exterior door frames, the molded-in rebate surface of a frame member against which door panels close and seal.',
  },
  {
    term: 'Joint Tenancy',
    definition:
      'Form of ownership in which the tenants own a property equally. If one dies, the other automatically inherits the entire property.',
  },
  // ── K ──────────────────────────────────────────────────────────────────────
  {
    term: 'Keeper',
    definition:
      'Normally a device into which a window or patio door locking latch hooks over for security.',
  },
  {
    term: 'Kerf',
    definition:
      'A thin slot cut into a part with a molder or saw blade. Weatherstrip is inserted into kerfs cut into door jambs.',
  },
  {
    term: 'Kicker',
    definition:
      'Synonymous with the word activator or catalyst, and sometimes actually added as a third material in a three-part system.',
  },
  {
    term: 'King Stud',
    definition:
      'In a wood-framed rough opening, the stud which runs full height from floor plate to ceiling plate, against which the trimmer stud attaches.',
  },
  {
    term: 'Knuckle',
    definition:
      'The feature of a hinge where the hinge leaf is cut for two or three projections which wrap and form a barrel or socket for the hinge pin.',
  },
  {
    term: 'Krypton Gas',
    definition:
      'An inert, nontoxic gas used in insulating windows to reduce heat transfer. Krypton is denser and more viscous than argon, providing superior resistance to convective heat transfer. Used in Suburban Construction\'s FreedomMaxxx 10 triple pane system for maximum energy efficiency.',
  },
  // ── L ──────────────────────────────────────────────────────────────────────
  {
    term: 'Laminate',
    definition:
      'A thin face of wood or plastic, adhesively bonded to a core or substrate, which makes up the decorative, wear or weatherable surface of the part.',
  },
  {
    term: 'Laminated Glass',
    definition:
      'Two or more sheets with an inner layer of transparent plastic to which the glass adheres if broken. Used for overhead, safety glazing, and sound reduction.',
  },
  {
    term: 'Laminator',
    definition:
      'Manufacturer of laminated glass, which consists of 2 or more layers of glass and/or plastic bonded together with a PVB or PVC interlayer.',
  },
  {
    term: 'Lap',
    definition:
      'To overlap the ends of two siding panels or accessory pieces to allow for expansion and contraction of the vinyl product.',
  },
  {
    term: 'Latch',
    definition:
      'A moveable, usually spring-loaded pin or bolt, which is part of a lock mechanism, and engages a socket or clip on a door jamb, retaining the door closed.',
  },
  {
    term: 'Leaf',
    definition:
      'A term which can apply to a door or hinge and which defines a part of the assembly which can swing on a pivot. Butt hinges have two leaves.',
  },
  {
    term: 'Lift',
    definition:
      'Handle for raising the lower sash in a double-hung window. Also called sash lift.',
  },
  {
    term: 'Light-to-Solar-Gain Ratio',
    definition:
      'A measure of the ability of a glazing to provide light without excessive solar heat gain. It is the ratio between the visible transmittance of a glazing and its solar heat gain coefficient. Abbreviated LSG.',
  },
  {
    term: 'Lintel',
    definition:
      'A horizontal member above a window or door opening that supports the structure above.',
  },
  {
    term: 'Liquid Crystal Glazing',
    definition:
      'Glass in which the optical properties of a thin layer of liquid crystals are controlled by an electrical current, changing from a clear to a diffusing state.',
  },
  {
    term: 'Lite',
    definition:
      'A unit of glass in a window or door unit.',
  },
  {
    term: 'Loan Origination Fee',
    definition:
      'Lender will charge a fee for the cost of processing the loan, usually calculated as a percentage of the loan amount.',
  },
  {
    term: 'Loan To Value Ratio',
    definition:
      'Relationship between the amount of a home loan and the total value of the property.',
  },
  {
    term: 'Lock Block',
    definition:
      'A rectangular block of wood or other solid material, placed inside a door assembly at the lock side edge, which reinforces the assembly when the lock hardware is installed.',
  },
  {
    term: 'Lock Bore',
    definition:
      'For cylindrical locksets, the large through hole, usually 2-1/8 inches in diameter, bored near the door panel\'s lock edge, into which the lock mechanism is placed and installed.',
  },
  {
    term: 'Lock Stile',
    definition:
      'In insulated door assemblies, the full-length part, usually wood, which makes up the lock edge of the door panel.',
  },
  {
    term: 'Long-Range Infrared Radiation',
    definition:
      'Invisible radiation, beyond red light on the electromagnetic spectrum (above 3.5 micrometers), emitted by warm surfaces such as a body at room temperature radiating to a cold window surface.',
  },
  {
    term: 'Louver',
    definition:
      'A slatted opening for ventilation in which the slats are so placed to exclude rain, sunlight or vision.',
  },
  {
    term: 'Low-Conductance Spacers',
    definition:
      'An assembly of materials designed to reduce heat transfer at the edge of an insulating window. Spacers are placed between the panes of glass in a double- or triple-glazed window.',
  },
  {
    term: 'Low-E Glass',
    definition:
      'Microscopically thin, virtually invisible, metal or metallic oxide layers deposited on a window or skylight glazing surface primarily to reduce the U-factor by suppressing radiative heat flow. A typical Low-E coating is transparent to the solar spectrum (visible light and short-wave infrared radiation) and reflective of long-wave infrared radiation.',
  },
  {
    term: 'Lug / Crimp',
    definition:
      'The raised "ears" or tabs on a siding panel, created by a snaplock punch, which can be used to lock a siding panel into place when the nailing hem has been removed.',
  },
  // ── M ──────────────────────────────────────────────────────────────────────
  {
    term: 'Masterframe',
    definition:
      'The combination of the head, sill and jamb sections of a window.',
  },
  {
    term: 'Mastic',
    definition:
      'Descriptive of compounds that remain elastic and pliable with age.',
  },
  {
    term: 'Meeting Rail',
    definition:
      'The part of a sliding glass door, a sliding window or a hung window where two panels meet and create a weather barrier.',
  },
  {
    term: 'Metal-Clad Windows',
    definition:
      'Exterior wood parts covered with extruded aluminum or other metal, with a factory-applied finish to deter the elements.',
  },
  {
    term: 'Mill Finish',
    definition:
      'The original finish produced on aluminum by cold rolling or extruding.',
  },
  {
    term: 'Miter',
    definition:
      'To make a diagonal cut, beveled to a specific angle (usually 45°). Sometimes miter cuts are made into an overlapping siding or soffit panel surface, to provide a neater appearance.',
  },
  {
    term: 'Mitered Corners',
    definition:
      'The 45-degree butted flush joints produced in some sash where vertical jamb members meet horizontal head and sill members.',
  },
  {
    term: 'Mock-Up',
    definition:
      'A model of a section of a wall or its parts, built to scale or at full size, for purposes of studying its construction details, judging its appearance, and/or testing its performance.',
  },
  {
    term: 'Moisture Vapor Transmission Rate',
    definition:
      'The rate at which moisture diffuses through a substance. Generally given in grams/meters² x 24 hours. The lower the MVT rate, the greater the resistance of the sealant to moisture penetration.',
  },
  {
    term: 'Monomer',
    definition:
      'A substance or simple chemical compound that can be polymerized, yielding a much larger molecule called a polymer.',
  },
  {
    term: 'Mortgage Commitment',
    definition:
      'Formal written communication by a lender agreeing to make a mortgage loan on a specific property, specifying the loan amount, length of time and conditions.',
  },
  {
    term: 'Mortgage Origination Fee',
    definition:
      'Charge for the work involved in preparing and servicing a mortgage application (usually 1 percent of the loan amount).',
  },
  {
    term: 'Mortise',
    definition:
      'A recess cut into the surface or edge of a part, usually for the purpose of housing hardware such as hinges and lock parts.',
  },
  {
    term: 'Mortise-Type Lock',
    definition:
      'A lockset which usually has a rectangular-shaped mechanism, housed into a deep recess cut into the edge of a door.',
  },
  {
    term: 'Mull',
    definition:
      'A short term for mullion. Used occasionally as a verb to describe the joining of two door or window units together, or the joining of a door to a sidelite unit.',
  },
  {
    term: 'Mulled',
    definition:
      'An adjective describing a door and sidelite unit which has been made by edge-joining two framed units together.',
  },
  {
    term: 'Mullion',
    definition:
      'A post or divider which runs from sill to frame top in a multi-panel door or door and sidelite assembly.',
  },
  {
    term: 'Multiple Extension Unit',
    definition:
      'In patio-door assemblies, a fixed door panel in a separate frame, edge-joining to a patio door unit to add another glass panel to the installation.',
  },
  {
    term: 'Muntins',
    definition:
      'In glazed lite assemblies, thin vertical and horizontal divider bars which give the lite a multi-paned look. Muntins may be part of lite frames, on the outside surface of the glass, or assembled between glass in insulated glass units.',
  },
  {
    term: 'Muntins Grilles',
    definition:
      'Wood, plastic, or metal grids designed for a single-light sash to give the appearance of muntins in a multilight sash, but removable for ease in cleaning the window.',
  },
  {
    term: 'Mylar',
    definition:
      'A weatherstripping material present where the sash frame meets the masterframe. Adds increased resistance to air infiltration.',
  },
  // ── N ──────────────────────────────────────────────────────────────────────
  {
    term: 'Nailing Fin',
    definition:
      'A feature of some windows and patio doors which permits installation and fastening to a rough opening by nails or screws driven through the fin at the top and side edges of the unit, into the surrounding frame of the opening.',
  },
  {
    term: 'Nailing Hem (or Flange)',
    definition:
      'The section of siding or accessories where the nailing slots are located.',
  },
  {
    term: 'Needle Glazing',
    definition:
      'Application of a small bead of compound at the sight line by means of a gun nozzle about 1/4" x 1/8" in opening size.',
  },
  {
    term: 'Neoprene',
    definition:
      'A synthetic rubber having physical properties closely resembling those of natural rubber but not requiring sulphur for vulcanization. Made by polymerizing chloroprenes.',
  },
  {
    term: 'NFRC',
    definition:
      'National Fenestration Rating Council. An industry association which sets the standards for testing, rating, and labeling doors and windows with heat transmission and energy information.',
  },
  {
    term: 'Night Latch',
    definition:
      'A lever or knob-actuated bolt for fastening a door more securely at night.',
  },
  {
    term: 'Nitrile Rubber',
    definition:
      'A class of rubber-like co-polymers of acrylo nitrile with butadiene. It has high resistance to solvents, oils, greases, heat, and abrasion.',
  },
  {
    term: 'Non-Resilient Tape',
    definition:
      'A high solids content, mastic material furnished in varying thicknesses and widths, in roll form; easily deformed and permanently soft and tacky.',
  },
  {
    term: 'Non-Skinning',
    definition:
      'Descriptive of a product that does not form a surface skin after application. Usually remains tacky or sticky.',
  },
  {
    term: 'Non-Staining',
    definition:
      'Characteristic of a compound which will not stain a surface by bleeding or migration of its oils or vehicle content.',
  },
  {
    term: 'Non-Volatile',
    definition:
      'Any substance which does not evaporate or volatilize under normal conditions of temperature and pressure.',
  },
  {
    term: 'Nosing',
    definition:
      'An edge piece, usually molded with a rounded face or corner, which runs the length of an assembly.',
  },
  {
    term: 'Nozzle',
    definition:
      'The tubular tip of a caulking gun through which the compound is extruded.',
  },
  {
    term: 'NRP Hinge',
    definition:
      'An abbreviation for a hinge with a non-removable pivot pin. NRP hinges are used when exterior doors swing out, as a security feature. The fixed pins make it impossible to remove a door by driving out pivot pins.',
  },
  // ── O ──────────────────────────────────────────────────────────────────────
  {
    term: 'Oakum',
    definition:
      'Hemp-like fibers in loose, ropey strands, formerly used as joint filler before caulking where deep joints were present. Since superseded by materials such as ethafoam and polyethylene.',
  },
  {
    term: 'Obscure Glass',
    definition:
      'Glass that has been made translucent instead of transparent.',
  },
  {
    term: 'Open-Cell Foam',
    definition:
      'A foam material which has passageways between cells. Open-cell foam will absorb and retain water, because the water will penetrate deeply inside the foam.',
  },
  {
    term: 'Organic',
    definition:
      'Compounds which consist of carbon and generally hydrogen, with a restricted number of other elements such as oxygen, nitrogen, sulphur, phosphorous, chlorine, etc.',
  },
  {
    term: 'Organic Compound',
    definition:
      'A coating such as paint, lacquer, enamel, or plastic film in which the principal ingredients are derived from animal or vegetable matter or from some compound or carbon (which includes all plastics).',
  },
  {
    term: 'Outside Casing',
    definition:
      'Wooden exterior framing of the window.',
  },
  {
    term: 'Outswing',
    definition:
      'An exterior door assembly in which the door panel swings outside the building.',
  },
  // ── P ──────────────────────────────────────────────────────────────────────
  {
    term: 'Panel',
    definition:
      'A major component of a sliding glass door, consisting of a lite of glass in a frame installed within the main (or outer) frame of the door. A panel may be sliding or fixed.',
  },
  {
    term: 'Panic-Proof Lock',
    definition:
      'A lock and latch device which permits a door to be opened outward by pressure being applied to a bar mounted across the inside face of the door.',
  },
  {
    term: 'Panning',
    definition:
      'In replacement window work, the outside aluminum trim that can extend around the perimeter of the window opening; used to cover up the old window material.',
  },
  {
    term: 'Particle Dispersed Glazing',
    definition:
      'Glazing in which the orientation of small particles between two sheets of glass is controlled electrically, thus changing its optical properties.',
  },
  {
    term: 'Parting Stop',
    definition:
      'A narrow strip, either integral or applied, that holds a sash or panel in position in a frame.',
  },
  {
    term: 'Passage Lock',
    definition:
      'A lockset which will keep a door closed but cannot be locked.',
  },
  {
    term: 'Passive',
    definition:
      'In a double or two-panel door assembly, the door which usually remains closed and fixed by bolts at top and bottom. The other door panel is used for regular passage.',
  },
  {
    term: 'Peak Load',
    definition:
      'The maximum thermal load to be provided by a heating or cooling system in a house.',
  },
  {
    term: 'Peeling',
    definition:
      'The failure of a compound whereby the skin curls away from the remaining compound under the skin.',
  },
  {
    term: 'Permanent Set',
    definition:
      'The amount by which a material fails to return to its original form after being deformed by an applied force or load.',
  },
  {
    term: 'Permeability',
    definition:
      'The quality of permitting passage of water through openings without causing rupture or displacement.',
  },
  {
    term: 'Permit',
    definition:
      'Document issued by a local government agency allowing construction to be performed in conformance with local codes. Work may not commence until permits have been obtained, and each permit-issuing agency must inspect the work at certain specified points during construction.',
  },
  {
    term: 'Photochromic',
    definition:
      'Glazing with optical properties that change in response to the amount of incident light.',
  },
  {
    term: 'Picture Window',
    definition:
      'A window that does not move or operate.',
  },
  {
    term: 'PITI',
    definition:
      'Principal, Interest, Taxes and Insurance (the four major components of monthly housing payments).',
  },
  {
    term: 'Plant',
    definition:
      'A decorative molding applied to the surface of a flush door, to give the appearance of a raised-molding design.',
  },
  {
    term: 'Plastic Film',
    definition:
      'A thin plastic substrate, sometimes used as the inner layers in a triple- or quadruple-glazed window.',
  },
  {
    term: 'Plastics',
    definition:
      'Artificial substances made of organic polymers that can be extruded or molded into various shapes including window frames and sashes.',
  },
  {
    term: 'Plate Glass',
    definition:
      'A rolled, ground, and polished product with true flat parallel plane and surfaces affording excellent vision. It has been replaced by float glass.',
  },
  {
    term: 'Plumb',
    definition:
      'A position or measurement that is truly and exactly vertical, 90° from a level surface.',
  },
  {
    term: 'Point',
    definition:
      'One-time charge assessed by the lender at closing to increase the interest yield on a mortgage loan. Generally, it is 1 percent of the mortgage amount.',
  },
  {
    term: 'Polybutene',
    definition:
      'A light-colored liquid, straight-chain aliphatic hydrocarbon polymer. Non-drying and widely used as a major component in sealing and caulking compounds. Essentially non-reactive and inert.',
  },
  {
    term: 'Polyester',
    definition:
      'Manufactured by reacting dicarboxylic acid and a dihydroxy alcohol. Polyesters are used in one and two-part systems for coatings and molding compounds.',
  },
  {
    term: 'Polyethylene',
    definition:
      'A straight-chain plastic polymer of ethylene (gaseous hydrocarbon) used for containers, packaging, etc.',
  },
  {
    term: 'Polyisobutylene',
    definition:
      'Polymer manufactured from gaseous hydrocarbons. This polymer is a major portion of butyl rubber which also contains a small percent of isoprene.',
  },
  {
    term: 'Polymer',
    definition:
      'A material which has been polymerized from smaller molecules into longer molecules or chains. This can be done by addition or condensation reaction.',
  },
  {
    term: 'Polymerized',
    definition:
      'Treated by heating or cooking so that molecules of different substances unite into larger molecules of a different substance with individual characteristics.',
  },
  {
    term: 'Polymerization',
    definition:
      'The reaction occurring when two or more molecules of a compound are united to form a more complex compound with a larger molecular weight.',
  },
  {
    term: 'Polysulfide',
    definition:
      'Polysulfide liquid polymers are mercaptan-terminated, long-chain aliphatic polymers containing disulfide linkages. They can be converted to rubbers at room temperatures without shrinkage upon addition of a curing agent.',
  },
  {
    term: 'Polyurethane',
    definition:
      'A synthetic rubber formed by the reaction of a glycol with an isocyanate. When used in sealants, yields a rubber-like material with excellent strength characteristics.',
  },
  {
    term: 'Positive Lock',
    definition:
      'Area below the nailing hem that the buttlock locks into.',
  },
  {
    term: 'Pot Life Test',
    definition:
      'The time interval following the addition of an accelerator or curing agent before a chemically curing material will become too viscous to apply satisfactorily. Synonymous with working life.',
  },
  {
    term: 'Pre-Shimming',
    definition:
      'A preformed tape containing a built-in continuous elastomer rod to eliminate use of individual shims which can be inadvertently omitted.',
  },
  {
    term: 'Presettlement Walk Through',
    definition:
      'Final inspection of a house prior to closing, conducted by the buyer.',
  },
  {
    term: 'Prime Window',
    definition:
      'A window which is installed during the initial construction and serves as an integral part of the structure. Not to be confused with storm windows which serve as a secondary weathering device.',
  },
  {
    term: 'Primer',
    definition:
      'A special coating designed to enhance the adhesion of sealant systems to certain surfaces or a final organic coating to a surface.',
  },
  {
    term: 'Priming',
    definition:
      'Sealing of a porous surface so that compound will not stain, lose elasticity, shrink excessively, etc., because of loss of oils or vehicle into the surface.',
  },
  {
    term: 'Principal',
    definition:
      'Amount borrowed, excluding interest and other charges.',
  },
  {
    term: 'Profile',
    definition:
      'Describes the design of the panel (Clapboard, Dutch lap, Triple 3, etc.).',
  },
  {
    term: 'Projected Window',
    definition:
      'A window fitted with one or more sashes opening on pivoted arms or hinges. Refers to casements, awnings, and hoppers.',
  },
  {
    term: 'Property Survey',
    definition:
      'Survey to determine the boundaries of a piece of property. Cost depends on the complexity of the survey.',
  },
  {
    term: 'PSF',
    definition:
      'Pounds per square foot (lbs/ft²). Abbreviation of pressure notation, used to describe wind velocity and barometric pressure.',
  },
  {
    term: 'PSI',
    definition:
      'Pounds per square inch (lbs/in²).',
  },
  {
    term: 'PVC',
    definition:
      'Abbreviation for polyvinyl chloride, a plastic material used to make molded or extruded parts.',
  },
  // ── R ──────────────────────────────────────────────────────────────────────
  {
    term: 'Rabbet',
    definition:
      'A two-sided L-shaped recess in sash or frame to receive lites or panels.',
  },
  {
    term: 'Racking',
    definition:
      'Movement and distortion of sash or frame because of lack of rigidity, or caused by adjustment of ventilator sections. Puts excessive strain on the sealant and may result in joint failure.',
  },
  {
    term: 'Radiation',
    definition:
      'The transfer of heat in the form of electromagnetic waves from one separate surface to another. Energy from the sun reaches the earth by radiation and a person\'s body can lose heat to a cold window or skylight surface in a similar way.',
  },
  {
    term: 'Rail',
    definition:
      'In insulated door panels, the part made of wood or a composite material which runs across the top and bottom ends. In stile and rail doors, horizontal pieces at top and bottom edges, and at intermediate points, which connect and frame between the stiles.',
  },
  {
    term: 'Ramp',
    definition:
      'In a sill or threshold, the horizontal face which is exposed.',
  },
  {
    term: 'Recording Fee',
    definition:
      'Charge for recording the transfer of a property, paid to a city, county or other appropriate branch of government.',
  },
  {
    term: 'Reglet',
    definition:
      'Any slot cut into masonry or formed into poured concrete or precast stone. May also be an open mortar joint left between two courses of bricks or stones.',
  },
  {
    term: 'RESFEN',
    definition:
      'A computer program used to calculate energy use based on window selection in residential buildings.',
  },
  {
    term: 'Retrofitting',
    definition:
      'Adding or replacing items to existing buildings. Typical retrofit products are replacement doors and windows, insulation, storm windows, caulking, weatherstripping, and vents.',
  },
  {
    term: 'Reveal',
    definition:
      'The offset or margin between edges of parts.',
  },
  {
    term: 'Riser',
    definition:
      'A term which describes the part of an adjustable sill which can be moved up or down by turning adjusting screws.',
  },
  {
    term: 'Roof Deck',
    definition:
      'Structural segment upon which the roofing material, either shingles or tiles, are installed.',
  },
  {
    term: 'Roof Window',
    definition:
      'A fixed or operable window similar to a skylight placed in the sloping surface of a roof.',
  },
  {
    term: 'Rough Opening',
    definition:
      'A structurally framed opening in a wall which receives a door unit or window.',
  },
  {
    term: 'R-Value',
    definition:
      'A measure of the resistance of a glazing material or fenestration assembly to heat flow. It is the inverse of the U-factor (R = 1/U) and is expressed in units of hr-sq ft-°F/Btu. A high R-value window has a greater resistance to heat flow and a higher insulating value than one with a low R-value.',
  },
  // ── S ──────────────────────────────────────────────────────────────────────
  {
    term: 'Saddle',
    definition:
      'In an adjustable sill, another term for riser. Also, a shop-applied label applied around the corner or edge of a door, which provides identification and installation instructions.',
  },
  {
    term: 'Safety Glass',
    definition:
      'Glass which when broken, shatters into small pieces without sharp edges.',
  },
  {
    term: 'Sash',
    definition:
      'Separate from the masterframe, the portion of the window that contains the glass. In a double hung window, both the upper and lower sashes can move. The sash includes the rails (horizontal members) and stiles (vertical members).',
  },
  {
    term: 'Sash Limit Locks',
    definition:
      'A feature that allows a window to be safely raised to a certain height.',
  },
  {
    term: 'Scoring',
    definition:
      'Running a utility knife blade, sharpened awl, or other sharp implement across a soffit or siding panel face without cutting all the way through. This weakens the vinyl surface and allows the panel to be bent and broken off cleanly.',
  },
  {
    term: 'Screen Track',
    definition:
      'A feature of a door sill or frame head which provides a housing and runner for rollers, to allow a screen panel to slide from side to side in the door.',
  },
  {
    term: 'Screw Boss',
    definition:
      'A continuous screw point on an aluminum extrusion designed to accept a specific diameter sheet metal screw and which will provide a secure means of fastening without the use of any reinforcement.',
  },
  {
    term: 'Sealant',
    definition:
      'Elastic material pumped or troweled into a joint to prevent water penetration.',
  },
  {
    term: 'Self-Cased',
    definition:
      'A steel frame for which the edge detail finishes to the surrounding wall, without the need for additional applied casing molding.',
  },
  {
    term: 'Self-Locating Hinge',
    definition:
      'A hinge with indexing or locating tabs to aid in exact placement against a door edge.',
  },
  {
    term: 'Setting Block',
    definition:
      'Use of small blocks made of neoprene (preferred) or lead to distribute weight of glass or panel to strong points of sash, aid in centering glass or panel, and prevent glass-to-metal contact.',
  },
  {
    term: 'Setting Time',
    definition:
      'A period when a material has either dried sufficiently through solvent release, or cured sufficiently through chemical reaction, to reach a specified condition.',
  },
  {
    term: 'Shading Coefficient',
    definition:
      'The ratio of the solar heat gain through a specific glazing system to the total solar heat gain through a single layer of clear, double-strength glass.',
  },
  {
    term: 'Shading Screen',
    definition:
      'A specially fabricated screen of sheet material with small narrow louvers formed in place to intercept solar radiation striking a window. Also called sun screen.',
  },
  {
    term: 'Shear',
    definition:
      'Strain put on a compound between two surfaces when there is a slipping movement of the two surfaces parallel to and in opposite directions along the length of the joint.',
  },
  {
    term: 'Sheet Glass',
    definition:
      'A transparent, flat glass whose surface has a characteristic waviness. Now replaced by float glass. Classifications: single strength (3/32" thick), double strength (1/8" thick), and heavy sheet (3/16", 7/32" and 1/4").',
  },
  {
    term: 'Shelf Life',
    definition:
      'The length of time that packaged materials such as adhesives and sealants can be stored under specific temperature conditions and still remain suitable for use.',
  },
  {
    term: 'SHGC (Solar Heat Gain Coefficient)',
    definition:
      'A measure of how much solar radiation passes through a window, expressed as a number between 0 and 1. Lower SHGC values mean less solar heat gain — desirable for cooling-dominated climates. In cold climates like the Quad Cities, a moderate SHGC can be beneficial for passive solar heating.',
  },
  {
    term: 'Shim',
    definition:
      'A thin piece of material used between parts of an assembly to change and fix the distance between parts when parts are fastened.',
  },
  {
    term: 'Shim Installation',
    definition:
      'Generally a wedge-shaped spacer (such as cedar shingles, in residential work) used to firmly locate a window or door frame into a rough opening.',
  },
  {
    term: 'Shur Flow',
    definition:
      'A gutter protection system offered by Suburban Construction that keeps gutters clear of leaves and debris. Shur Flow uses a filter insert that allows water through while blocking organic material.',
  },
  {
    term: 'Sidelite',
    definition:
      'A fixed narrow panel, installed next to a door panel, for decorative purposes. Sidelites almost always contain glass lites.',
  },
  {
    term: 'Sight Line',
    definition:
      'Imaginary line along the perimeter of lites or panels corresponding to the top edge of stationary or removable stops.',
  },
  {
    term: 'Sill',
    definition:
      'The horizontal, bottom section of the masterframe.',
  },
  {
    term: 'Single Glazing',
    definition:
      'The use of a single thickness of glass in a window or door, as opposed to sealed insulating glass which offers far superior insulating characteristics.',
  },
  {
    term: 'Single Hung Window',
    definition:
      'Similar in appearance to the double-hung window, the single-hung window features a stationary top sash and a moveable bottom sash.',
  },
  {
    term: 'Slide Bolt',
    definition:
      'The part of an astragal assembly which, by means of moving latches at tops and bottoms of astragals, places bolts into frame heads and sills, for fixing passive door panels closed.',
  },
  {
    term: 'Slider Window',
    definition:
      'Also called a glider window. A window in which one or more sashes slide horizontally within the frame. Sliders work well in wide openings and require no clearance above or below for operation. Available in two-lite (one operating sash) or three-lite (two operating sashes) configurations.',
  },
  {
    term: 'Sliding Patio Doors',
    definition:
      'A combination of fixed and sliding glass door panels that operate on solid brass roller trucks. Available in 2-, 3- or 4-lite configurations with the operable panel available in any position.',
  },
  {
    term: 'Sloped Sill',
    definition:
      'The sill of some double-hung windows that has a downward slope toward the outside with a capture dam that helps to keep water from infiltrating the base of the bottom sash. Sloped sills assist water drainage to the exterior of the window.',
  },
  {
    term: 'Soffit',
    definition:
      'Material used to enclose the horizontal underside of an eave, cornice, or overhang. Some soffit panels may also be used as vertical siding.',
  },
  {
    term: 'Solar Heat Gain Coefficient (SHGC)',
    definition:
      'The fraction of solar radiation admitted through a window or skylight, both directly transmitted and absorbed and subsequently released inward. It is expressed as a number between 0 and 1. The lower a window\'s solar heat gain coefficient, the less solar heat it transmits and the greater its shading ability.',
  },
  {
    term: 'Sound Transmission Class (STC)',
    definition:
      'The sound transmission loss rating of a material over a selected range of sound frequencies. The higher the number, the better.',
  },
  {
    term: 'Spacer',
    definition:
      'An object placed between two or more pieces of glass which helps to maintain a uniform width between the glass, and prevent sealant distortion.',
  },
  {
    term: 'Spacer Shims',
    definition:
      'Devices that are U-shaped in cross-section and an inch or more in length, placed on the edges of lites or panels to serve as shims and to keep the lites or panels centered in the channels.',
  },
  {
    term: 'Spandrel Glass',
    definition:
      'Heat-strengthened float glass with a colored-ceramic coating adhered to the back by a heat-fusing process. Used as a fixed opaque colored glass on buildings in front of floor slabs and columns.',
  },
  {
    term: 'Specifications',
    definition:
      'Contractual document describing in detail the work to be performed; quality, type and manufacturer of materials and equipment for a particular project.',
  },
  {
    term: 'Spectrally Selective Glazing',
    definition:
      'A coated or tinted glazing with optical properties that are transparent to some wavelengths of energy and reflective to others. Typical spectrally selective coatings are transparent to visible light and reflect short-wave and long-wave infrared radiation.',
  },
  {
    term: 'Square',
    definition:
      'A measurement of siding. One square equals 100 square feet (10 x 10 wall).',
  },
  {
    term: 'SST Non-Metal Spacer',
    definition:
      'A solid silicone foam spacer covered with Mylar. It is sealed to the edge of the glass and then sealed with butyl for greater energy efficiency.',
  },
  {
    term: 'Starter Strip',
    definition:
      'An accessory applied directly to the surface of the building and used to secure the first course of siding to the home.',
  },
  {
    term: 'Stile',
    definition:
      'In insulated door panels, the full-length parts, usually wood, which make up the long edges. In stile and rail doors, the vertical edge parts.',
  },
  {
    term: 'Stop',
    definition:
      'Either the stationary lip at the back of a rabbet, or the removable molding at the front of the rabbet, either or both serving to hold lite or panel in the sash or frame. Also the part of a door frame against which the door closes.',
  },
  {
    term: 'Storm Window',
    definition:
      'A second set of windows installed on the outside or inside of the primary window to provide additional insulation and weather protection.',
  },
  {
    term: 'Strapping',
    definition:
      'A flexible framing material used to even a surface prior to installation.',
  },
  {
    term: 'Strike',
    definition:
      'A metal part with a hole or recess for receiving a door latch, also with a curved or ramped face so a spring-loaded latch contacts it when closing. Strikes are fit into mortises in door jambs or mullions, and screw-fastened.',
  },
  {
    term: 'Style',
    definition:
      'A number or name defining a door design or configuration.',
  },
  {
    term: 'Subfloor',
    definition:
      'The concrete or wood floor surface lying under the finished floor. Prehung door assemblies are installed atop the subfloor.',
  },
  {
    term: 'Substrate',
    definition:
      'The base or core material in an assembly of parts.',
  },
  {
    term: 'Sun Control Film',
    definition:
      'A tinted or reflective film applied to the glazing surface to reduce visible, ultra-violet, or total transmission of solar radiation. Reduces solar heat gain in summer and glare.',
  },
  {
    term: 'Super Window',
    definition:
      'A window with a very low U-factor, typically less than 0.15, achieved through the use of multiple glazing, low-E coatings, and gas fills.',
  },
  {
    term: 'Switch-able Glazing',
    definition:
      'Glazing with optical properties that can be reversibly switched from clear to dark or reflective.',
  },
  // ── T ──────────────────────────────────────────────────────────────────────
  {
    term: 'Tempered Glass',
    definition:
      'Glass sheet which has been strengthened by heat processing. Tempered glass, when broken, shatters into small pieces without sharp edges. See also: Safety Glass.',
  },
  {
    term: 'Temperer',
    definition:
      'Manufacturer of tempered glass, which is heat treated either vertically or horizontally. Tempered glass, when shattered, breaks into rounded, smooth pieces rather than sharp, irregular pieces.',
  },
  {
    term: 'Template',
    definition:
      'A pattern or jig used to machine-cut a precise hole or recess into a door or frame part.',
  },
  {
    term: 'Tenancy In Common',
    definition:
      'Form of ownership in which the tenants own separate but equal parts. To inherit the property, a surviving tenant would either have to be mentioned in the will or be eligible through state inheritance laws.',
  },
  {
    term: 'Thermal Break',
    definition:
      'A feature of a door or frame assembly which separates metal or glass exposed to outside temperatures from coming into contact with and transmitting heat to or from inside-exposed parts.',
  },
  {
    term: 'Thermal Expansion',
    definition:
      'Change in dimension of a material as a result of temperature change.',
  },
  {
    term: 'Thermal Mass',
    definition:
      'Mass in a building (furnishings or structure) that is used to absorb solar gain during the day and release the heat as the space cools in the evening.',
  },
  {
    term: 'Thermochromic',
    definition:
      'Glazing with optical properties that can change in response to temperature changes.',
  },
  {
    term: 'Thermogram',
    definition:
      'An image of an object taken with an infrared camera that shows surface temperature variations.',
  },
  {
    term: 'Threshold',
    definition:
      'Another term for sill. The horizontal part of a door assembly, fixed under the door panel and bearing on the floor.',
  },
  {
    term: 'Tilt Windows',
    definition:
      'A single or double hung window whose operable sash can be tilted into the room for interior washability.',
  },
  {
    term: 'Tinted Glass',
    definition:
      'Glass made with a green, gray or bronze tint, so as to reduce light transmittance.',
  },
  {
    term: 'Title',
    definition:
      'Evidence (usually in the form of a certificate or deed) of a person\'s legal right to ownership of a property.',
  },
  {
    term: 'Tolerance',
    definition:
      'Permissible deviation from a nominal or specified dimension or value.',
  },
  {
    term: 'Tooling',
    definition:
      'The operation of pressing in and striking a compound in a joint in order to press compound against the sides of a joint and secure good adhesion. Also the finishing off of the surface of a compound in a joint so that it is flush with the surface.',
  },
  {
    term: 'TPE',
    definition:
      'Abbreviation for thermoplastic elastomer. TPEs are used to make weatherstripping and gasketing parts.',
  },
  {
    term: 'Transom',
    definition:
      'A framed glass assembly mounted atop a door assembly. Transoms are rectangular in shape or have curved or arched tops.',
  },
  {
    term: 'Transport Clip',
    definition:
      'A steel piece used to temporarily fasten a prehung door assembly closed for handling and shipping, which maintains the door panel\'s proper position in the frame.',
  },
  {
    term: 'Trimmer Stud',
    definition:
      'In a wood-framed rough opening, the stud or framing member which runs vertically from the subfloor to and supporting the structural header member, into which a door frame is fastened.',
  },
  {
    term: 'Triple Pane',
    definition:
      'An insulated glass assembly made of three thicknesses of glass, with air or gas-filled spaces between the outer and inner thicknesses. Triple pane windows provide significantly better insulating performance than double pane units, especially when filled with krypton gas.',
  },
  {
    term: 'Trombe Wall',
    definition:
      'Glass-covered concrete wall that collects and stores heat passively. Heat radiates back into the building or into internal air or heating systems.',
  },
  {
    term: 'Two-Part Compound',
    definition:
      'A product which is packaged in two separate containers, comprised of a base and the curing agent or accelerator. The two components are uniformly mixed just prior to use since, when mixed, it cures and its useful life is quite limited.',
  },
  // ── U ──────────────────────────────────────────────────────────────────────
  {
    term: 'U-Factor (U-Value)',
    definition:
      'The standard measure of a window\'s overall heat transfer rate, expressed in units of Btu/hr-sq ft-°F. Lower U-factor = better insulating performance. The lower the U-factor, the greater a window\'s resistance to heat flow and the better its insulating value.',
  },
  {
    term: 'Underlayment',
    definition:
      'Weather-resistant material placed under vinyl siding panels.',
  },
  {
    term: 'Urethane',
    definition:
      'A plastic material made by reacting two polymers. A urethane part will burn, but it will not melt.',
  },
  {
    term: 'UV (Ultraviolet Light)',
    definition:
      'The invisible rays of the spectrum that are outside of the visible spectrum at its short-wavelength violet end. Ultraviolet rays are found in everyday sunlight and can cause fading of paint finishes, carpets and fabrics.',
  },
  {
    term: 'UV Reflection',
    definition:
      'The percentage of ultraviolet rays being blocked rather than being transmitted through the window\'s glass unit. The higher the number, the lower the percentage of ultraviolet rays being transmitted through the window.',
  },
  // ── V ──────────────────────────────────────────────────────────────────────
  {
    term: 'Vapor Retarder',
    definition:
      'A material that reduces the diffusion of water vapor across a building assembly.',
  },
  {
    term: 'Veneer',
    definition:
      'A thin film or facing, adhesively bonded to a core or substrate, which makes up the exposed and decorative face of an assembly.',
  },
  {
    term: 'Veterans Administration (VA)',
    definition:
      'Federal agency that insures mortgage loans with very liberal down payment requirements for honorably discharged veterans and their surviving spouses.',
  },
  {
    term: 'Vinyl',
    definition:
      'Polyvinyl chloride material that can be both rigid or flexible, used in glazing channels and weathering of both windows and doors.',
  },
  {
    term: 'Vinyl Glazing',
    definition:
      'Holding glass in place with extruded vinyl channels or roll-in type.',
  },
  {
    term: 'Vinyl Siding',
    definition:
      'Exterior cladding made from PVC (polyvinyl chloride). Vinyl siding is the most popular siding material in the United States due to its low maintenance requirements, durability, and wide range of color and profile options. Available in standard and insulated varieties.',
  },
  {
    term: 'Visible Light',
    definition:
      'The portion of the electromagnetic spectrum that produces light that can be seen. Wavelengths range from 380 to 720 nanometers.',
  },
  {
    term: 'Visible Transmittance (VT)',
    definition:
      'The percentage or fraction of the visible spectrum (380 to 720 nanometers) weighted by the sensitivity of the eye that is transmitted through the glazing.',
  },
  // ── W ──────────────────────────────────────────────────────────────────────
  {
    term: 'Warm-Edge Technology',
    definition:
      'The use of low-conductance spacers to reduce heat transfer near the edge of insulated glazing.',
  },
  {
    term: 'Warp',
    definition:
      'A permanent curvature or deviation from straightness, which can be induced in a part or assembly by a load or force, or by exposure to heat or moisture.',
  },
  {
    term: 'Warranty',
    definition:
      'A manufacturer\'s or contractor\'s guarantee covering a product or service for a defined period. Suburban Construction provides a lifetime workmanship guarantee on all installations, covering installation defects. Product warranties are provided by Associated Materials Inc. (AMI).',
  },
  {
    term: 'Water Penetration',
    definition:
      'The unwanted passage of water through a door or window system.',
  },
  {
    term: 'Weatherstripping',
    definition:
      'Sealing material applied around the edges of operable window sashes and door panels to prevent air and water infiltration when the window or door is closed. Quality weatherstripping is critical to the energy performance of windows and doors.',
  },
  {
    term: 'Wedge Glazing',
    definition:
      'Interior flexible continuous pressure-fit gasket that ensures a high-compression seal between the glass and aluminum while applying pressure and seal to the outside architectural glazing tape.',
  },
  {
    term: 'Weep Holes',
    definition:
      'Small openings in the bottom rail of a window frame or in window sill panning that allow any water that enters the frame cavity to drain to the outside. Properly functioning weep holes are essential to prevent water accumulation and associated rot or damage.',
  },
  {
    term: 'Wet Glazing',
    definition:
      'A method of sealing glass in a frame by use of a knife or gun-applied glazing compound or sealant.',
  },
  {
    term: 'Window Hardware',
    definition:
      'Various devices and mechanisms for the window including catches, fasteners and locks, hinges, pivots, lifts and pulls, pulleys and sash weights, sash balances, and stays.',
  },
  {
    term: 'Window Wall',
    definition:
      'A metal curtain wall of the commercial type, in which windows are the most prominent element.',
  },
  {
    term: 'Wired Glass',
    definition:
      'Glass made for use in fire doors, which has embedded wires which bind the glass and permit it to remain monolithic when exposed to fire.',
  },
  {
    term: 'Wood Grain Finish',
    definition:
      'A decorative interior finish applied to vinyl window frames to simulate the appearance of natural wood. Commonly available in oak, mahogany, pine, and cherry tones. Provides the visual warmth of wood with none of the maintenance requirements.',
  },
  // ── Z ──────────────────────────────────────────────────────────────────────
  {
    term: 'Zoning',
    definition:
      'Regulations established by local governments regarding the location, height and use for any given piece of property within a specific area.',
  },
]

// Group terms alphabetically
const grouped = glossaryTerms.reduce<Record<string, typeof glossaryTerms>>((acc, term) => {
  const letter = term.term[0].toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(term)
  return acc
}, {})

const letters = Object.keys(grouped).sort()

export default function GlossaryPage() {
  return (
    <>
      <DefinedTermSchema
        terms={glossaryTerms}
        setName="Home Improvement Glossary"
        setDescription="Plain-English definitions for home improvement terms covering windows, siding, doors, gutters, and construction — compiled by Suburban Construction, Quad Cities contractor since 1985."
      />
      <PageHero
        title="Home Improvement Glossary"
        subtitle="Plain-English definitions for common home improvement terms — windows, siding, doors, and more"
        breadcrumbs={[{ label: 'Resources' }, { label: 'Glossary' }]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            A-Z Glossary of Home Improvement Terms
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Home improvement involves a lot of technical terminology. This glossary covers the most
            important terms you are likely to encounter when shopping for replacement windows, siding,
            doors, or gutters in the Quad Cities area.
          </p>

          {/* Alphabet quick-nav */}
          <div className="flex flex-wrap gap-2 mb-8">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded bg-accent-xlight text-accent-dark font-bold text-sm hover:bg-accent hover:text-white transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>

          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-8">
              <h3 className="text-xl font-bold text-accent border-b border-accent-faint pb-2 mb-4">
                {letter}
              </h3>
              <dl className="space-y-4">
                {grouped[letter].map((item) => (
                  <div key={item.term}>
                    <dt className="font-bold text-gray-900">{item.term}</dt>
                    <dd className="text-gray-600 leading-relaxed mt-1">{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team is happy to explain anything in plain language — no jargon required.
            Contact us for a free, no-pressure estimate and conversation.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  )
}
