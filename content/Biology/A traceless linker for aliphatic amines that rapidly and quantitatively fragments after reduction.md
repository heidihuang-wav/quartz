---
title: A traceless linker for aliphatic amines that rapidly and quantitatively fragments after reduction
tags:
  - Biology
  - Paper
---
visual[Link](https://pubs.rsc.org/en/content/articlelanding/2020/sc/d0sc00929f) to paper. Quotes and relevant (to me; this is not a comprehensive overview of the paper) below, loosely structured.

---
## Notes
### Intro
Title 
- "traceless" - does not leave a permanent or detectable mark or residue, aka  reversible modification or can be undone without leaving a lasting impact on the original structure

RSLs
- RSLs are important to drug delivery for many reasons (see pg 8973)
- Important RSL application: "reversible modification of Lys on proteins" (8973) 
	- e.g. RSLs can be used to attach PEG or cell-penetrating peptides to improve proteins' therapeutic efficacy
	- Lys residues on proteins
		- Advantage (why Lys is an appealing target for conjugating adjuvants to proteins): Lys commonly found on proteins, easily modifiable under mild aqueous conditions due to high nucleophilicity
		- Bad (challenges in modification): Lys crucial for protein activity, so extensiv e modification tends to compromise protein function
	- Where RSLs come in: RSLs offer *reversible* Lys modification, so promising strategy for effective protein delivery
- 2 major classes of RSLs developed to modify aliphatic amines, but no widespread applications for protein delivery bc of their "slow `self-immolation` rates or incomplete release" (8973-8974)
	- Thus, there is a need for new "amine-modifying RSLs that can modify the Lys residues of proteins in a traceless manner" 
### DEC: a traceless self-immolative linker
- DEC := dithiol-ethyl carbonate linker connected to a benzyl carbamate linker
	- "DEC is composed of two rapidly hydrolyzing self-immolative linkers connected in series, and this unique design allows it to overcome the challenges associated with making RSLs for aliphatic amines" (8974)
	- Significance: DEC has many potential applications in biotech bc aliphatic amines are common on small molecules and protein therapeutics (8974)
- Applications of DEC in this paper
	- Modify CRISPR-Cas9 with PEG, `cell-penetrating peptides` (CPPs), and donor DNA
		- Why use CRISPR-Cas9 as a model protein to PEGylate with DEC to examine the self-immolative nature of DEC? bc "Cas9 has multiple Lys residues in its active site, and widespread modification of the Lys residues will result in its inactivation" (8975), also bc PEGylating Cas9 could potentially address some of its delivery challenges, specifically its "immunogenicity (potential to trigger an immune response) slow diffusion through tissue, and proteolysis in serum" (8975)
### Results and Discussion
- "PEGylated Cas9 has numerous potential advantages over wild type Cas9, such as lower immunogenicity and improved diffusion through tissue, which is essential for genome editing in a clinical setting" (8976) 
- Experiment: testing if Cas9-DEC-PEG can efficiently diffuse through striatum after an intracranial injection
	- Why brain? bc poor diffusion of Cas9 through brain tissue is a key delivery challenge holding back Cas9's clinical potential
	- Result: "Fig. 3d indicates that Alexa488Cas9–DEC–PEG5k diffused through the striatum significantly better than its unmodified counterpart (Alexa488- Cas9), and had a volume of distribution (Vd) that was 3.7-fold higher than native Alexa488Cas9 (Table S2†)." (8976)
		- Interpretation (of this and other experiments' results not mentioned here): "DEC linker can reversibly modify the Lys residues of proteins (Cas9) and has the stability in biological fluids needed for in vivo applications"
- Cas9 and CPP
	- CPPs can be conjugated to Cas9 using DEC linker
	- Cas9-CPP can edit cells
	- CPP-DEC enhances internalization of Cas9 into cells (experiment used human cardiomyocytes)
	- DEC enhances efficiency of `homology-directed repair` (HDR) by "reversibly conjugating Cas9 RNP to template donor DNA" (8978)
		- Significance: bottleneck preventing translation of Cas9-based therapeutics is generating HDR in cells with Cas9 reagents
		- "Recently, chemically tethered Cas9 RNP–donor DNA has been demonstrated to result in signicant increases in HDR, due to the simultaneous localization of Cas9 RNP and donor DNA within the same region of the genome." (8978)
			- My understanding: in HDR, the repair process involves using the donor DNA template to precisely replace or insert a sequence at the site of the double-strand break. Simultaneous localization ensures that both the molecular scissors (Cas9) and the template for repair (donor DNA) are present together at the target site. 
		- Need: "However, current methods for tethering the Cas9 RNP to donor DNA require making Cas9 fusion proteins, which have been challenging to express and purify" (8978)
		- Finding: "DEC was...able to increase the HDR rate of the CRISPR system by 50% by reversibly tethering donor DNA to Cas9 RNP in traceless manner" (8979)
### Summary of Findings
- Developed a novel traceless self-immolative linker, DEC, which can modify aliphatic amines and rapidly release them after reduction
- Reversibly modified Lys on Cas9 with PEG using DEC, enhancing Cas9 diffusion through brain tissue 
- Reversibly modified Cas9 protein via DEC, conjugating Lys with CPP Arg10
		- Cas9–CPP successfully edited cells, showing potential as a self-delivering (without the need for `transfection reagents`) Cas9 RNP formulation
- DEC increased HDR rate of CRISPR system by 50%, reversibly tethering donor DNA to Cas9 RNP
## Glossary
- `reduction sensitive linker` (RSL): a chemical linkage or bond within a molecule that is designed to be sensitive to reduction reactions 
- `self-immolation`: spontaneous breaking or cleaving of a particular chemical bond in a molecule
- `cell-penetrating peptide` (CPP): short peptide sequence with the ability to traverse cell membranes and facilitate the entry of various cargo molecules, such as proteins, nucleic acids, or nanoparticles, into cells
- `homology-directed repair` (HDR): DNA repair mechanism that uses a homologous DNA template to accurately and precisely repair double-strand breaks in the DNA. This process relies on the cell's ability to use an intact, homologous DNA sequence as a template for repair (different than NHEJ)
- `transfection reagent`: substance or formulation used to introduce foreign genetic material (in this case, to introduce CRISPR machinery) into eukaryotic cells
